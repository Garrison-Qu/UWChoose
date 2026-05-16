import { create } from 'zustand'
import {
  getCurrentUser,
  signIn as signInRequest,
  signOut as signOutRequest,
  signUp as signUpRequest,
} from '../lib/authApi'
import type { AuthUser } from '../lib/authApi'

type AuthState = {
  user?: AuthUser
  isHydrating: boolean
  message?: string
  hydrate: () => Promise<void>
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string, displayName?: string) => Promise<void>
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

  signIn: async (email, password) => {
    set({ isHydrating: true, message: undefined })

    try {
      const response = await signInRequest(email, password)

      set({ user: response.user, message: 'Signed in.' })
    } catch (error) {
      set({ message: getErrorMessage(error) })
      throw error
    } finally {
      set({ isHydrating: false })
    }
  },

  signUp: async (email, password, displayName) => {
    set({ isHydrating: true, message: undefined })

    try {
      const response = await signUpRequest(email, password, displayName)

      set({ user: response.user, message: 'Account created.' })
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
