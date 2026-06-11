export const studentStorageKey = 'uwchoose.student'

export function clearLegacyStudentStorage(): void {
  if (typeof window === 'undefined') {
    return
  }

  try {
    window.localStorage.removeItem(studentStorageKey)
  } catch {
    // Storage may be unavailable in private or restricted browser modes.
  }
}

export function isStorageAvailable(): boolean {
  try {
    const testKey = 'uwchoose.storage-test'
    window.localStorage.setItem(testKey, testKey)
    window.localStorage.removeItem(testKey)
    return true
  } catch {
    return false
  }
}
