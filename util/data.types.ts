export interface StrapiFetchArtDataType {
  id: number
  title: string
  description: string
  type: string
  shop_item?: {
    id: number
    title: string
    description: string
    price: number
    type: string
    created_at: Date
    updated_at: Date
    images: []
  }
  created_at: Date
  updated_at: Date
  image: {
    id: number
    name: string
    alternativeText: string
    caption: string
    width: number
    height: number
    formats: {}
    hash: string
    ext: string
    mime: string
    size: number
    url: string
    previewUrl: string | null
    provider: string
    provider_metadata: string | {} | null
    created_at: Date
    updated_at: Date
  }
}

export interface StrapiFetchShopDataType {
  id: number
  title: string
  description: string
  price: number
  type: string
  created_at: Date
  updated_at: Date
  images: [
    {
      id: number
      name: string
      alternativeText: string
      caption: string
      width: number
      height: number
      formats: {}
      hash: string
      ext: string
      mime: string
      size: number
      url: string
      previewUrl: string | null
      provider: string
      provider_metadata: string | {} | null
      created_at: Date
      updated_at: Date
    }
  ]
}

export interface ErrorResponseType {
  statusCode: number
  message: string
}

export interface MenuItemType {
  text: string
  url: string
}
