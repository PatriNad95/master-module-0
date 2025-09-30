export const useStorage = <T>(storageKey: string) => {
  const get = () => {
    const item = localStorage.getItem(storageKey)
    return item ? JSON.parse(item) : null
  }

  const set = (value: T) => {
    localStorage.setItem(storageKey, JSON.stringify(value))
  }

  return { get, set }
}
