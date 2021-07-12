export const readFromLocalStorage = (name: string) => {
  if (typeof window !== "undefined") return null

  const localStorageItem = localStorage.getItem(name)
  if (!localStorageItem) return null

  return JSON.parse(localStorageItem)
}

export const writeToLocalStorage = (name: string, value: {} | []) => {
  typeof window !== "undefined" &&
    localStorage.setItem(name, JSON.stringify(value))
}
