export const studentStorageKey = 'uwchoose.student'

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
