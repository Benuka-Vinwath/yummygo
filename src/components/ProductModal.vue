<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type { CartProductLike } from '../types/cart'

type ProductLike = {
  id?: number | string
  title?: string
  name?: string
  description?: string
  ingredients?: unknown
  calories?: string
  serving?: string
  deliveryTime?: string
  spicyLevel?: string
  foodType?: string
  tags?: unknown
  price?: number | string
  badge?: string
  imageUrl?: string
  image?: string
  images?: unknown
  [key: string]: unknown
}

const props = defineProps<{
  product: ProductLike | null
}>()

const emit = defineEmits<{
  close: []
  'add-to-basket': [payload: { product: CartProductLike; quantity: number }]
}>()

const quantity = ref(1)
const selectedImage = ref('')

const productTitle = computed(() => {
  return props.product?.title || props.product?.name || 'Food Item'
})

const productDescription = computed(() => {
  return props.product?.description || 'Fresh and tasty food prepared with quality ingredients.'
})

const productIngredients = computed<string[]>(() => {
  if (!props.product?.ingredients || !Array.isArray(props.product.ingredients)) return []
  return props.product.ingredients.filter(
    (item): item is string => typeof item === 'string' && item.trim().length > 0,
  )
})

const productTags = computed<string[]>(() => {
  if (!props.product?.tags || !Array.isArray(props.product.tags)) return []
  return props.product.tags.filter(
    (item): item is string => typeof item === 'string' && item.trim().length > 0,
  )
})

const nutritionMeta = computed(() => {
  return {
    calories: props.product?.calories || 'N/A',
    serving: props.product?.serving || 'N/A',
    deliveryTime: props.product?.deliveryTime || 'N/A',
    spicyLevel: props.product?.spicyLevel || 'N/A',
    foodType: props.product?.foodType || 'N/A',
  }
})

const imageList = computed<string[]>(() => {
  if (!props.product) return []

  const imagesValue = props.product.images
  const normalizedFromArray = Array.isArray(imagesValue)
    ? imagesValue.filter((img): img is string => typeof img === 'string' && img.trim().length > 0)
    : []

  if (normalizedFromArray.length > 0) return normalizedFromArray

  const fallback = [props.product.imageUrl, props.product.image].filter(
    (img): img is string => typeof img === 'string' && img.trim().length > 0,
  )

  return fallback
})

const resolvedPrice = computed(() => {
  if (!props.product) return 'Rs. 0'

  if (props.product.badge && typeof props.product.badge === 'string') {
    return props.product.badge
  }

  const numericPrice =
    typeof props.product.price === 'number'
      ? props.product.price
      : typeof props.product.price === 'string'
        ? Number(props.product.price)
        : NaN

  if (Number.isFinite(numericPrice)) {
    return `Rs. ${numericPrice}`
  }

  return 'Rs. 0'
})

const mainImage = computed(() => {
  if (selectedImage.value) return selectedImage.value
  return imageList.value[0] || 'https://placehold.co/600x400?text=Food'
})

const closeModal = () => {
  emit('close')
}

const addToBasket = () => {
  if (!props.product) return
  emit('add-to-basket', {
    product: props.product,
    quantity: quantity.value,
  })
  emit('close')
}

const increaseQuantity = () => {
  quantity.value += 1
}

const decreaseQuantity = () => {
  quantity.value = Math.max(1, quantity.value - 1)
}

watch(
  () => props.product,
  () => {
    quantity.value = 1
    selectedImage.value = imageList.value[0] || ''
  },
  { immediate: true },
)
</script>

<template>
  <div
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
    @click="closeModal"
  >
    <div
      class="relative w-full max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-2xl"
      @click.stop
    >
      <button
        type="button"
        class="absolute right-4 top-4 z-10 h-10 w-10 rounded-full bg-black/30 text-lg font-bold transition hover:bg-black/45"
        aria-label="Close modal"
        @click="closeModal"
      >
        ×
      </button>

      <div class="grid gap-6 p-5 md:grid-cols-2 md:gap-8 md:p-8">
        <div>
          <img
            :src="mainImage"
            :alt="productTitle"
            class="h-64 w-full rounded-2xl object-cover md:h-80"
          />

          <div class="mt-4 flex flex-wrap gap-2">
            <button
              v-for="(thumb, idx) in imageList"
              :key="`${thumb}-${idx}`"
              type="button"
              class="h-16 w-16 overflow-hidden rounded-xl border-2 transition"
              :class="mainImage === thumb ? 'border-white' : 'border-white/40 hover:border-white/70'"
              @click="selectedImage = thumb"
            >
              <img
                :src="thumb"
                :alt="`${productTitle} thumbnail ${idx + 1}`"
                class="h-full w-full object-cover"
              />
            </button>
          </div>
        </div>

        <div class="flex flex-col justify-between">
          <div>
            <h2 class="text-2xl font-extrabold md:text-3xl">
              {{ productTitle }}
            </h2>
            <p class="mt-4 text-sm leading-6 text-orange-100 md:text-base">
              {{ productDescription }}
            </p>
            <p class="mt-5 text-2xl font-bold">
              {{ resolvedPrice }}
            </p>

            <div class="mt-5 grid grid-cols-2 gap-2 text-xs md:text-sm">
              <p class="rounded-lg bg-white/20 px-3 py-2"><span class="font-semibold">Calories:</span> {{ nutritionMeta.calories }}</p>
              <p class="rounded-lg bg-white/20 px-3 py-2"><span class="font-semibold">Serving:</span> {{ nutritionMeta.serving }}</p>
              <p class="rounded-lg bg-white/20 px-3 py-2"><span class="font-semibold">Delivery:</span> {{ nutritionMeta.deliveryTime }}</p>
              <p class="rounded-lg bg-white/20 px-3 py-2"><span class="font-semibold">Spice:</span> {{ nutritionMeta.spicyLevel }}</p>
            </div>

            <p class="mt-3 text-sm text-orange-100">
              <span class="font-semibold text-white">Type:</span> {{ nutritionMeta.foodType }}
            </p>

            <div v-if="productIngredients.length" class="mt-4">
              <p class="text-sm font-semibold text-white">Ingredients</p>
              <ul class="mt-2 flex flex-wrap gap-2">
                <li
                  v-for="ingredient in productIngredients"
                  :key="ingredient"
                  class="rounded-full bg-white/20 px-3 py-1 text-xs"
                >
                  {{ ingredient }}
                </li>
              </ul>
            </div>

            <div v-if="productTags.length" class="mt-4 flex flex-wrap gap-2">
              <span
                v-for="tag in productTags"
                :key="tag"
                class="rounded-full bg-[#111827]/65 px-3 py-1 text-xs font-semibold text-white"
              >
                #{{ tag }}
              </span>
            </div>
          </div>

          <div class="mt-6 space-y-4">
            <div class="inline-flex items-center rounded-full bg-white/20 p-1">
              <button
                type="button"
                class="h-10 w-10 rounded-full bg-white/20 text-xl font-bold transition hover:bg-white/35"
                @click="decreaseQuantity"
              >
                -
              </button>
              <span class="mx-5 min-w-4 text-center text-lg font-semibold">
                {{ quantity }}
              </span>
              <button
                type="button"
                class="h-10 w-10 rounded-full bg-white/20 text-xl font-bold transition hover:bg-white/35"
                @click="increaseQuantity"
              >
                +
              </button>
            </div>

            <button
              type="button"
              class="w-full rounded-2xl bg-[#111827] px-6 py-3 text-base font-semibold text-white transition hover:bg-black"
              @click="addToBasket"
            >
              Add to Basket
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
