import { describe, expect, it, vi } from 'vitest'
import { requestVerificationCode, verifyVerificationCode } from './authApi'

const user = {
  id: 'user-1',
  email: 'alex@uwaterloo.ca',
  avatarUrl: 'https://example.test/avatar.png',
}

describe('auth API client', () => {
  it('requests a Waterloo verification code', async () => {
    const fetcher = vi.fn(async () => ({
      ok: true,
      status: 202,
      json: async () => ({ message: 'Verification code sent.' }),
    }))

    const result = await requestVerificationCode(
      'alex@uwaterloo.ca',
      fetcher as unknown as typeof fetch,
      'http://api.test',
    )

    expect(result).toEqual({ message: 'Verification code sent.' })
    expect(fetcher).toHaveBeenCalledWith('http://api.test/api/auth/request-code', {
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify({ email: 'alex@uwaterloo.ca' }),
    })
  })

  it('verifies a code and returns the signed-in user', async () => {
    const fetcher = vi.fn(async () => ({
      ok: true,
      status: 200,
      json: async () => ({ user }),
    }))

    const result = await verifyVerificationCode(
      'alex@uwaterloo.ca',
      '123456',
      fetcher as unknown as typeof fetch,
      'http://api.test',
    )

    expect(result).toEqual({ user })
    expect(fetcher).toHaveBeenCalledWith('http://api.test/api/auth/verify-code', {
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify({ email: 'alex@uwaterloo.ca', code: '123456' }),
    })
  })
})
