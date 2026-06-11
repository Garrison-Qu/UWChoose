import { create } from 'zustand'
import {
  getCurrentUser,
  requestVerificationCode as requestVerificationCodeRequest,
  signOut as signOutRequest,
  verifyVerificationCode as verifyVerificationCodeRequest,
} from '../lib/authApi'
import type { AuthUser } from '../lib/authApi'

type AuthState = {
  user?: AuthUser
  isHydrating: boolean
  message?: string
  hydrate: () => Promise<void>
  requestVerificationCode: (email: string) => Promise<void>
  verifyVerificationCode: (email: string, code: string) => Promise<void>
  signOut: () => Promise<void>
  clearMessage: () => void
}

function getErrorMessage(error: unknown) {
  return error instanceof Error ? error.message : 'Account request failed.'
}

export const useAuthStore = create<AuthState>((set) => ({
  user: undefined,
  isHydrating: false,
  message: undefined,

  hydrate: async () => {
    set({ isHydrating: true, message: undefined })

    try {
      const response = await getCurrentUser()

      set({ user: response.user })
    } catch {
      set({ user: undefined })
    } finally {
      set({ isHydrating: false })
    }
  },

  requestVerificationCode: async (email) => {
    set({ isHydrating: true, message: undefined })

    try {
      await requestVerificationCodeRequest(email)
      set({ message: 'Verification code sent.' })
    } catch (error) {
      set({ message: getErrorMessage(error) })
      throw error
    } finally {
      set({ isHydrating: false })
    }
  },

  verifyVerificationCode: async (email, code) => {
    set({ isHydrating: true, message: undefined })

    try {
      const response = await verifyVerificationCodeRequest(email, code)

      set({ user: response.user, message: 'Signed in.' })
    } catch (error) {
      set({ message: getErrorMessage(error) })
      throw error
    } finally {
      set({ isHydrating: false })
    }
  },

  signOut: async () => {
    await signOutRequest()
    set({ user: undefined, message: 'Signed out.' })
  },

  clearMessage: () => set({ message: undefined }),
}))
