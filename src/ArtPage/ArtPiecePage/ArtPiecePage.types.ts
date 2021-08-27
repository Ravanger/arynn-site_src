import { UrlObject } from "url"
import { ArtItemType } from "../ArtPage.types"

export interface ArtPiecePageProps {
  item: ArtItemType
  displayAll: boolean
  prevPage: string | UrlObject
  nextPage: string | UrlObject
}
