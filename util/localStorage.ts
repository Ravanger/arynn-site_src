export const readFromLocalStorage = (name: string) => {
  return typeof window !== "undefined" && localStorage.getItem(name)
}

export const saveToLocalStorage = (name: string, value: {} | []) => {
  typeof window !== "undefined" &&
    localStorage.setItem(name, JSON.stringify(value))
}
