import { promises as fs } from "fs"
import path from "path"
import { ArtItemType } from "src/ArtPage/ArtPage.types"

export const writeCache = async (
  propsToCache: ArtItemType[],
  fileName: string
) => {
  await fs
    .writeFile(path.resolve(fileName), JSON.stringify(propsToCache), "utf8")
    .catch(() => {})
}

export const readCache = async (fileName: string) => {
  let cachedProps: ArtItemType[] = []

  try {
    cachedProps = JSON.parse(await fs.readFile(fileName, "utf8"))
  } catch (_) {
    /* not fatal */
  }

  return cachedProps
}
