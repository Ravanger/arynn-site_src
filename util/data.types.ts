import { Product } from "use-shopping-cart"

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

interface StrapiFetchShopDataCustomExtendedOptionType {
  id: number
  extended_option_name: string
  extended_option_price: number
}

export interface StrapiFetchShopDataCustomType {
  id: number
  custom_types_name: string
  custom_types_price: number
  extended_options: StrapiFetchShopDataCustomExtendedOptionType[]
}

export interface StrapiFetchShopDataAddonsType {
  id: number
  custom_addons_name: string
  custom_addons_price: number
}

export interface StrapiFetchShopDataNumberOfPeopleType {
  id: number
  custom_numberofpeople_name: string
  custom_numberofpeople_price: number
}
export interface StrapiFetchShopDataType {
  id: number
  title: string
  description?: string
  price: number
  type: string
  maxquantity?: number
  created_at: Date
  updated_at: Date
  images: StrapiImageType[]
  is_sold?: boolean
  custom_types?: StrapiFetchShopDataCustomType[]
  custom_addons?: StrapiFetchShopDataAddonsType[]
}

export interface ErrorResponseType {
  statusCode: number
  message: string
}

export interface MenuItemType {
  text: string
  url: string
}

export interface ExtendedOptionsProductType extends Product {
  extended_options: Product[]
}

export interface CustomProductType extends Product {
  images?: StrapiImageType[]
  isSold?: boolean
  quantity?: number
  customId?: string
  product_data?: {
    metadata: {
      type: string
      maxQuantity: number
    }
  }
  customData?: {
    availableAddons: {
      types: ExtendedOptionsProductType[]
      addons: Product[]
    }
    selectedAddons: {
      type: ExtendedOptionsProductType
      extended_option: Product
      addons: Product[]
    }
    customMessage?: string
  }
}
