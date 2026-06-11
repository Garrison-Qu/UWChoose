import { Buffer } from 'node:buffer'
import { Socket, connect as connectSocket } from 'node:net'
import { TLSSocket, connect as connectTlsSocket } from 'node:tls'

type SmtpConfig = {
  host: string
  port: number
  user?: string
  pass?: string
  from: string
}

type SmtpClient = {
  socket: Socket | TLSSocket
  buffer: string
}

function getSmtpConfig(): SmtpConfig | undefined {
  const host = process.env.SMTP_HOST?.trim()
  const from = process.env.SMTP_FROM?.trim()

  if (!host || !from) {
    return undefined
  }

  return {
    host,
    port: Number(process.env.SMTP_PORT ?? 587),
    user: process.env.SMTP_USER?.trim() || undefined,
    pass: process.env.SMTP_PASS ?? undefined,
    from,
  }
}

function readSmtpResponse(client: SmtpClient): Promise<string> {
  return new Promise((resolve, reject) => {
    function cleanup() {
      client.socket.off('data', onData)
      client.socket.off('error', onError)
    }

    function onError(error: Error) {
      cleanup()
      reject(error)
    }

    function onData(chunk: Buffer) {
      client.buffer += chunk.toString('utf8')

      if (/(^|\r\n)\d{3} [^\r\n]*\r\n$/.test(client.buffer)) {
        const response = client.buffer

        client.buffer = ''
        cleanup()
        resolve(response)
      }
    }

    client.socket.on('data', onData)
    client.socket.on('error', onError)
  })
}

async function expectSmtpResponse(
  client: SmtpClient,
  expectedCodes: number[],
): Promise<string> {
  const response = await readSmtpResponse(client)
  const code = Number(response.slice(0, 3))

  if (!expectedCodes.includes(code)) {
    throw new Error(`SMTP server returned ${response.trim()}`)
  }

  return response
}

async function sendSmtpCommand(
  client: SmtpClient,
  command: string,
  expectedCodes: number[],
): Promise<string> {
  client.socket.write(`${command}\r\n`)

  return expectSmtpResponse(client, expectedCodes)
}

function openSocket(config: SmtpConfig): Promise<Socket | TLSSocket> {
  return new Promise((resolve, reject) => {
    let socket: Socket | TLSSocket

    if (config.port === 465) {
      socket = connectTlsSocket({ port: config.port, host: config.host }, () => resolve(socket))
    } else {
      socket = connectSocket(config.port, config.host, () => resolve(socket))
    }

    socket.once('error', reject)
  })
}

function startTls(socket: Socket | TLSSocket, host: string): Promise<TLSSocket> {
  return new Promise((resolve, reject) => {
    const tlsSocket = connectTlsSocket({ socket, servername: host }, () => resolve(tlsSocket))

    tlsSocket.once('error', reject)
  })
}

function escapeAddress(address: string) {
  return `<${address.replace(/[<>\r\n]/g, '')}>`
}

function formatVerificationEmail(from: string, to: string, code: string) {
  return [
    `From: ${from}`,
    `To: ${to}`,
    'Subject: Your UWChoose verification code',
    'Content-Type: text/plain; charset=utf-8',
    '',
    `Your UWChoose verification code is ${code}.`,
    'This code expires in 10 minutes.',
    '',
    'If you did not request this code, you can ignore this email.',
  ].join('\r\n')
}

async function sendSmtpMail(config: SmtpConfig, to: string, code: string) {
  const client: SmtpClient = {
    socket: await openSocket(config),
    buffer: '',
  }

  try {
    await expectSmtpResponse(client, [220])
    await sendSmtpCommand(client, `EHLO ${config.host}`, [250])

    if (config.port !== 465) {
      await sendSmtpCommand(client, 'STARTTLS', [220])
      client.socket = await startTls(client.socket, config.host)
      client.buffer = ''
      await sendSmtpCommand(client, `EHLO ${config.host}`, [250])
    }

    if (config.user && config.pass) {
      await sendSmtpCommand(client, 'AUTH LOGIN', [334])
      await sendSmtpCommand(client, Buffer.from(config.user).toString('base64'), [334])
      await sendSmtpCommand(client, Buffer.from(config.pass).toString('base64'), [235])
    }

    await sendSmtpCommand(client, `MAIL FROM:${escapeAddress(config.from)}`, [250])
    await sendSmtpCommand(client, `RCPT TO:${escapeAddress(to)}`, [250, 251])
    await sendSmtpCommand(client, 'DATA', [354])
    client.socket.write(`${formatVerificationEmail(config.from, to, code)}\r\n.\r\n`)
    await expectSmtpResponse(client, [250])
    await sendSmtpCommand(client, 'QUIT', [221])
  } finally {
    client.socket.end()
  }
}

export async function sendVerificationCodeEmail(email: string, code: string): Promise<void> {
  const config = getSmtpConfig()

  if (!config) {
    if (process.env.NODE_ENV === 'production') {
      throw new Error('SMTP is not configured.')
    }

    console.info(`[UWChoose] Verification code for ${email}: ${code}`)
    return
  }

  await sendSmtpMail(config, email, code)
}
