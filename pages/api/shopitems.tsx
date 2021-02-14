import type { NextApiResponse } from "next"

export interface ShopItem {
  title: string
  image: string
  price: string
  type: string
}

const shopList: ShopItem[] = [
  {
    title: "Custom portrait",
    image: "http://placekitten.com/500/500",
    price: "35+",
    type: "Custom",
  },
  {
    title: "Sticker package",
    image: "http://placekitten.com/400/400",
    price: "8",
    type: "Stickers",
  },
  {
    title: "Original Painting Title",
    image: "http://placekitten.com/450/450",
    price: "300",
    type: "Originals",
  },
  {
    title: "Custom portrait",
    image: "http://placekitten.com/600/600",
    price: "35+",
    type: "Custom",
  },
  {
    title: "Sticker package",
    image: "http://placekitten.com/550/333",
    price: "8",
    type: "Stickers",
  },
  {
    title: "Original Painting Title",
    image: "http://placekitten.com/375/375",
    price: "300",
    type: "Artwork",
  },
  {
    title: "Custom portrait",
    image: "http://placekitten.com/425/300",
    price: "35+",
    type: "Custom",
  },
  {
    title: "Sticker package",
    image: "http://placekitten.com/475/475",
    price: "8",
    type: "Stickers",
  },
  {
    title: "Original Painting Title",
    image: "http://placekitten.com/525/500",
    price: "300",
    type: "Originals",
  },
  {
    title: "Custom portrait",
    image: "http://placekitten.com/575/500",
    price: "35+",
    type: "Custom",
  },
  {
    title: "Sticker package",
    image: "http://placekitten.com/350/500",
    price: "8",
    type: "Stickers",
  },
  {
    title: "Original Painting Title",
    image: "http://placekitten.com/666/666",
    price: "300",
    type: "Artwork",
  },
]

export const getShopItems = async () => {
  return shopList
}

export default async (res: NextApiResponse<ShopItem[]>) => {
  const shopItems = await getShopItems()
  res.status(200).json(shopItems)
}
