<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

type MenuOffer = {
  id: number
  title: string
  description: string
  badge: string
  category: string
  section: string
  imageUrl: string
}

const tabs = ['All', 'Pizza', 'Burgers', 'Veg & Healthy', 'Seafood', 'Drinks']
const selectedTab = ref('All')
const offers = ref<MenuOffer[]>([])
const isLoading = ref(true)

const filteredOffers = computed(() => {
  if (selectedTab.value === 'All') return offers.value
  return offers.value.filter((offer) => offer.category === selectedTab.value)
})

const groupedOffers = computed(() => {
  return filteredOffers.value.reduce<Record<string, MenuOffer[]>>((acc, offer) => {
    if (!acc[offer.section]) acc[offer.section] = []
    acc[offer.section].push(offer)
    return acc
  }, {})
})

const loadMenu = async () => {
  try {
    const response = await fetch('/dummy/browse-menu.json')
    const data = (await response.json()) as { offers: MenuOffer[] }
    offers.value = data.offers
  } catch (error) {
    console.error('Failed to load browse menu JSON:', error)
    offers.value = []
  } finally {
    isLoading.value = false
  }
}

onMounted(loadMenu)
</script>

<template>
  <section class="bg-[#f5f5f5] px-6 py-8 md:px-16 md:py-10">
    <div class="mx-auto w-full max-w-6xl rounded-2xl border border-gray-200 bg-white p-4 shadow-sm md:p-6">
      <h1 class="text-xl font-extrabold tracking-wide text-gray-900 md:text-2xl">BROWSE MENU</h1>

      <div class="mt-4 flex flex-wrap items-center gap-2 border-b border-gray-200 pb-4">
        <button
          v-for="tab in tabs"
          :key="tab"
          type="button"
          class="rounded-full px-4 py-1.5 text-sm font-semibold transition"
          :class="selectedTab === tab ? 'bg-[#ff8908] text-white' : 'bg-gray-100 text-gray-700 hover:bg-orange-100'"
          @click="selectedTab = tab"
        >
          {{ tab }}
        </button>
      </div>

      <div v-if="isLoading" class="py-8 text-center text-sm font-medium text-gray-500">
        Loading menu...
      </div>

      <div v-else class="mt-5 space-y-6">
        <article v-for="(items, sectionName) in groupedOffers" :key="sectionName">
          <h2 class="mb-3 text-xs font-extrabold tracking-[0.2em] text-gray-900 md:text-sm">
            {{ sectionName }}
          </h2>

          <div class="grid gap-4 md:grid-cols-2">
            <div
              v-for="item in items"
              :key="item.id"
              class="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-3 shadow-sm"
            >
              <div class="mr-3 min-w-0">
                <p class="text-sm font-bold text-gray-900">{{ item.title }}</p>
                <p class="mt-1 text-xs text-gray-500">{{ item.description }}</p>
                <p class="mt-2 text-xs font-semibold text-gray-700">{{ item.badge }}</p>
              </div>

              <div class="relative h-20 w-20 flex-shrink-0">
                <img :src="item.imageUrl" :alt="item.title" class="h-full w-full rounded-xl object-cover" />
                <button
                  class="absolute -bottom-1 -right-1 h-6 w-6 rounded-full bg-[#111827] text-sm font-bold text-white"
                  type="button"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </article>

        <p v-if="!Object.keys(groupedOffers).length" class="py-8 text-center text-sm font-medium text-gray-500">
          No menu cards found for this category.
        </p>
      </div>
    </div>
  </section>
</template>