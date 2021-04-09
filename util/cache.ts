import { promises as fs } from "fs"
import path from "path"

export const writeFile = async (propsToCache: any[], fileName: string) => {
  await fs
    .writeFile(path.resolve(fileName), JSON.stringify(propsToCache), "utf8")
    .catch(() => {})
}

export const readFile = async (fileName: string) => {
  let cachedProps = []

  try {
    cachedProps = JSON.parse(await fs.readFile(fileName, "utf8"))
  } catch (_) {
    /* not fatal */
  }

  return cachedProps
}
