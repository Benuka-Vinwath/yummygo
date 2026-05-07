export type CartProductLike = {
  id?: number | string
  title?: string
  name?: string
  imageUrl?: string
  image?: string
  images?: unknown
  badge?: string
  price?: number | string
  description?: string
}

export type CartItem = {
  id: number | string
  name: string
  note: string
  price: number
  quantity: number
  image: string
}
