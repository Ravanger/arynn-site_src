export interface ArtItemType {
  id: string
  title: string
  image: string
  type: string
  description: string
  shopItemUrl?: string
}

export interface ArtPageType {
  artItems: ArtItemType[]
  artFilter: string
}
