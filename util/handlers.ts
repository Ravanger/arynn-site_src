import { MutableRefObject, useEffect } from "react"

/**
 * Hook that alerts clicks outside of the passed ref
 * https://stackoverflow.com/a/42234988/2717464
 */
export const useClickOutside = (
  ref: MutableRefObject<any>,
  functionToExecute: () => void
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target)) {
        functionToExecute()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [ref])
}
