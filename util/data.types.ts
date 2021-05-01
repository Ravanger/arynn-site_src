export interface StrapiImageType {
  id: number
  name: string
  alternativeText: string
  caption: string
  width: number
  height: number
  formats?: { thumbnail: [Object] }
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl?: string
  provider: string
  provider_metadata?: {
    public_id: string
    resource_type: string
  }
  created_at: Date
  updated_at: Date
}

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
  image: StrapiImageType
}

export interface StrapiFetchShopDataType {
  id: number
  title: string
  description: string
  price: number
  type: string
  maxquantity?: number
  created_at: Date
  updated_at: Date
  images: StrapiImageType[]
}

export interface ErrorResponseType {
  statusCode: number
  message: string
}

export interface MenuItemType {
  text: string
  url: string
}
