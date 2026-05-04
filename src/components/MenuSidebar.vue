<script setup lang="ts">
const categories = [
  'All',
  'Pizza',
  'Burgers',
  'Veg & Healthy',
  'Seafood',
  'Desserts',
  'Drinks',
]
</script>

<template>
  <div class="rounded-xl bg-white p-5 shadow">
    <h2 class="mb-4 font-bold text-gray-900">CATEGORIES</h2>

    <ul class="space-y-3">
      <li
        v-for="category in categories"
        :key="category"
        class="cursor-pointer text-gray-700 hover:text-orange-500"
      >
        {{ category }}
      </li>
    </ul>
  </div>
</template>