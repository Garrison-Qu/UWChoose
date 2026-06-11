import { randomBytes, randomUUID, scryptSync, timingSafeEqual } from 'node:crypto'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import type { SavedPlanProfile, StudentPlanBackup } from '../../frontend/src/types/student.ts'

export type PublicUser = {
  id: string
  email: string
  displayName?: string
  avatarUrl: string
}

type StoredUser = PublicUser & {
  plan?: StudentPlanBackup
  profile?: SavedPlanProfile
  createdAt: string
  updatedAt: string
}

type StoredSession = {
  id: string
  userId: string
  createdAt: string
}

type StoredVerificationCode = {
  email: string
  codeSalt: string
  codeHash: string
  expiresAt: string
  attempts: number
  createdAt: string
}

type UserStoreFile = {
  users: Record<string, StoredUser>
  sessions: Record<string, StoredSession>
  verificationCodes: Record<string, StoredVerificationCode>
}

export type AccountPlan = {
  plan?: StudentPlanBackup
  profile?: SavedPlanProfile
}

export type UserStore = {
  requestVerificationCode: (
    email: string,
    code: string,
    expiresAt: Date,
  ) => Promise<void>
  verifyEmailCode: (
    email: string,
    code: string,
    now: Date,
    maxAttempts: number,
  ) => Promise<PublicUser | undefined>
  createSession: (userId: string) => Promise<string>
  deleteSession: (sessionId: string) => Promise<void>
  getUserBySession: (sessionId: string) => Promise<PublicUser | undefined>
  getAccountPlan: (userId: string) => Promise<AccountPlan>
  updateAccountPlan: (
    userId: string,
    plan: StudentPlanBackup,
    profile?: SavedPlanProfile,
  ) => Promise<AccountPlan | undefined>
}

function getDefaultUserFilePath() {
  return process.env.USER_STORE_PATH?.trim() ||
    resolve(dirname(fileURLToPath(import.meta.url)), '..', 'data', 'users.json')
}

function createEmptyStoreFile(): UserStoreFile {
  return { users: {}, sessions: {}, verificationCodes: {} }
}

function normalizeEmail(email: string) {
  return email.trim().toLowerCase()
}

function getAvatarUrl(userId: string) {
  const avatarNumber = (userId.charCodeAt(0) % 25) + 1

  return `https://loremflickr.com/96/96/raccoon?lock=${avatarNumber}`
}

function publicUser(user: StoredUser): PublicUser {
  return {
    id: user.id,
    email: user.email,
    displayName: user.displayName,
    avatarUrl: user.avatarUrl,
  }
}

function hashSecret(secret: string, salt = randomBytes(16).toString('hex')) {
  const derivedKey = scryptSync(secret, salt, 64)

  return {
    salt,
    hash: derivedKey.toString('hex'),
  }
}

function verifySecret(secret: string, salt: string, expectedHash: string) {
  const { hash } = hashSecret(secret, salt)
  const expected = Buffer.from(expectedHash, 'hex')
  const actual = Buffer.from(hash, 'hex')

  return expected.length === actual.length && timingSafeEqual(expected, actual)
}

function findUserByEmail(storeFile: UserStoreFile, email: string) {
  return Object.values(storeFile.users).find((user) => user.email === email)
}

function createVerifiedUser(email: string): StoredUser {
  const now = new Date().toISOString()
  const userId = randomUUID()

  return {
    id: userId,
    email,
    avatarUrl: getAvatarUrl(userId),
    createdAt: now,
    updatedAt: now,
  }
}

async function readStoreFile(filePath: string): Promise<UserStoreFile> {
  try {
    const rawFile = await readFile(filePath, 'utf8')
    const parsed = JSON.parse(rawFile) as Partial<UserStoreFile>

    if (!parsed || typeof parsed !== 'object' || !parsed.users || typeof parsed.users !== 'object') {
      return createEmptyStoreFile()
    }

    return {
      users: parsed.users,
      sessions: parsed.sessions && typeof parsed.sessions === 'object' ? parsed.sessions : {},
      verificationCodes:
        parsed.verificationCodes && typeof parsed.verificationCodes === 'object'
          ? parsed.verificationCodes
          : {},
    }
  } catch (error) {
    if (error instanceof Error && 'code' in error && error.code === 'ENOENT') {
      return createEmptyStoreFile()
    }

    throw error
  }
}

async function writeStoreFile(filePath: string, storeFile: UserStoreFile) {
  await mkdir(dirname(filePath), { recursive: true })
  await writeFile(filePath, `${JSON.stringify(storeFile, null, 2)}\n`, 'utf8')
}

export function createFileUserStore(filePath = getDefaultUserFilePath()): UserStore {
  return {
    async requestVerificationCode(email, code, expiresAt) {
      const normalizedEmail = normalizeEmail(email)
      const storeFile = await readStoreFile(filePath)
      const now = new Date().toISOString()
      const codeResult = hashSecret(code)

      storeFile.verificationCodes[normalizedEmail] = {
        email: normalizedEmail,
        codeSalt: codeResult.salt,
        codeHash: codeResult.hash,
        expiresAt: expiresAt.toISOString(),
        attempts: 0,
        createdAt: now,
      }

      await writeStoreFile(filePath, storeFile)
    },

    async verifyEmailCode(email, code, now, maxAttempts) {
      const normalizedEmail = normalizeEmail(email)
      const storeFile = await readStoreFile(filePath)
      const verificationCode = storeFile.verificationCodes[normalizedEmail]

      if (!verificationCode) {
        return undefined
      }

      if (
        new Date(verificationCode.expiresAt).getTime() <= now.getTime() ||
        verificationCode.attempts >= maxAttempts
      ) {
        delete storeFile.verificationCodes[normalizedEmail]
        await writeStoreFile(filePath, storeFile)
        return undefined
      }

      if (!verifySecret(code, verificationCode.codeSalt, verificationCode.codeHash)) {
        verificationCode.attempts += 1

        if (verificationCode.attempts >= maxAttempts) {
          delete storeFile.verificationCodes[normalizedEmail]
        }

        await writeStoreFile(filePath, storeFile)
        return undefined
      }

      delete storeFile.verificationCodes[normalizedEmail]

      const user = findUserByEmail(storeFile, normalizedEmail) ?? createVerifiedUser(normalizedEmail)

      storeFile.users[user.id] = user
      await writeStoreFile(filePath, storeFile)

      return publicUser(user)
    },

    async createSession(userId) {
      const storeFile = await readStoreFile(filePath)
      const sessionId = randomUUID()

      storeFile.sessions[sessionId] = {
        id: sessionId,
        userId,
        createdAt: new Date().toISOString(),
      }
      await writeStoreFile(filePath, storeFile)

      return sessionId
    },

    async deleteSession(sessionId) {
      const storeFile = await readStoreFile(filePath)

      delete storeFile.sessions[sessionId]
      await writeStoreFile(filePath, storeFile)
    },

    async getUserBySession(sessionId) {
      const storeFile = await readStoreFile(filePath)
      const session = storeFile.sessions[sessionId]
      const user = session ? storeFile.users[session.userId] : undefined

      return user ? publicUser(user) : undefined
    },

    async getAccountPlan(userId) {
      const storeFile = await readStoreFile(filePath)
      const user = storeFile.users[userId]

      return {
        plan: user?.plan,
        profile: user?.profile,
      }
    },

    async updateAccountPlan(userId, plan, profile) {
      const storeFile = await readStoreFile(filePath)
      const user = storeFile.users[userId]

      if (!user) {
        return undefined
      }

      const updatedUser: StoredUser = {
        ...user,
        displayName: profile?.displayName ?? user.displayName,
        plan,
        profile: profile ?? user.profile,
        updatedAt: new Date().toISOString(),
      }

      storeFile.users[userId] = updatedUser
      await writeStoreFile(filePath, storeFile)

      return {
        plan: updatedUser.plan,
        profile: updatedUser.profile,
      }
    },
  }
}
