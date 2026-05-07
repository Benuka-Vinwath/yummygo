import { computed, ref } from 'vue'
import type { CartItem, CartProductLike } from '../types/cart'

const cartItems = ref<CartItem[]>([])
const isCartOpen = ref(false)

const deliveryFee = 100
const discount = ref(0)

const parsePrice = (product: CartProductLike): number => {
  if (typeof product.price === 'number') return product.price

  if (typeof product.price === 'string') {
    const priceValue = Number(product.price)
    if (Number.isFinite(priceValue)) return priceValue
  }

  if (typeof product.badge === 'string') {
    const parsed = Number(product.badge.replace(/[^\d.]/g, ''))
    if (Number.isFinite(parsed)) return parsed
  }

  return 0
}

const resolveImage = (product: CartProductLike): string => {
  if (Array.isArray(product.images)) {
    const firstImage = product.images.find(
      (item): item is string => typeof item === 'string' && item.trim().length > 0,
    )
    if (firstImage) return firstImage
  }

  if (typeof product.imageUrl === 'string' && product.imageUrl.trim().length > 0) {
    return product.imageUrl
  }

  if (typeof product.image === 'string' && product.image.trim().length > 0) {
    return product.image
  }

  return 'https://placehold.co/120x120?text=Food'
}

const resolveName = (product: CartProductLike): string => {
  return product.title || product.name || 'Food Item'
}

const resolveNote = (product: CartProductLike): string => {
  if (typeof product.description === 'string' && product.description.trim().length > 0) {
    return product.description
  }
  return 'Prepared fresh on order'
}

const openCart = () => {
  isCartOpen.value = true
}

const closeCart = () => {
  isCartOpen.value = false
}

const toggleCart = () => {
  isCartOpen.value = !isCartOpen.value
}

const addToCart = (product: CartProductLike, quantity: number) => {
  const safeQuantity = Math.max(1, quantity)
  const productId = product.id ?? resolveName(product)
  const existingItem = cartItems.value.find((item) => item.id === productId)

  if (existingItem) {
    existingItem.quantity += safeQuantity
    return
  }

  cartItems.value.push({
    id: productId,
    name: resolveName(product),
    note: resolveNote(product),
    price: parsePrice(product),
    quantity: safeQuantity,
    image: resolveImage(product),
  })
}

const removeItem = (itemId: number | string) => {
  cartItems.value = cartItems.value.filter((item) => item.id !== itemId)
}

const updateQuantity = (payload: { id: number | string; quantity: number }) => {
  const targetItem = cartItems.value.find((item) => item.id === payload.id)
  if (!targetItem) return
  targetItem.quantity = Math.max(1, payload.quantity)
}

const clearCart = () => {
  cartItems.value = []
}

const cartCount = computed(() => {
  return cartItems.value.reduce((total, item) => total + item.quantity, 0)
})

export const useCart = () => {
  return {
    cartItems,
    isCartOpen,
    deliveryFee,
    discount,
    cartCount,
    openCart,
    closeCart,
    toggleCart,
    addToCart,
    removeItem,
    updateQuantity,
    clearCart,
  }
}
