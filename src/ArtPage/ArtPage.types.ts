export interface ArtItemType {
  title: string
  image: string
  type: string
  description: string
  shopItemUrl?: string
}

export interface ArtPageType {
  artItems: ArtItemType[]
}
