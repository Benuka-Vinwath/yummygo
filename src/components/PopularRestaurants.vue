<script setup lang="ts">
import mcdonalds from '../assets/restaurants/mcdonalds.png'
import pizzaHut from '../assets/restaurants/pizza-hut.png'
import kfc from '../assets/restaurants/kfc.png'
import crepeRunner from '../assets/restaurants/crepe-runner.png'
import burgerKing from '../assets/restaurants/burger-king.png'
import tacoBell from '../assets/restaurants/taco-bell.png'

const restaurants = [
  { name: "McDonald's", image: mcdonalds },
  { name: 'Pizza Hut', image: pizzaHut },
  { name: 'KFC ', image: kfc },
  { name: 'Crepe Runner', image: crepeRunner },
  { name: 'Burger King', image: burgerKing },
  { name: 'Taco Bell', image: tacoBell },
]
</script>

<template>
  <section class="bg-white px-16 py-12">
    
    <!-- Title -->
    <h2 class="mb-10 text-4xl font-extrabold text-gray-900">
      Popular Restaurants
    </h2>

    <!-- Cards -->
    <div class="grid grid-cols-6 gap-6">

      <div
        v-for="restaurant in restaurants"
        :key="restaurant.name"
        class="h-[220px] rounded-2xl bg-[#FF8908] shadow-md flex flex-col items-center justify-center gap-4 px-3 transition hover:-translate-y-2 hover:shadow-lg"
      >
        
        <!-- 🔥 BIGGER LOGO AREA -->
        <div class="h-[140px] w-full flex items-center justify-center px-4">
          <img
            :src="restaurant.image"
            :alt="restaurant.name"
            class="max-h-full w-full object-contain"
          />
        </div>

        <!-- Name -->
        <h3 class="text-base font-semibold text-white text-center">
          {{ restaurant.name }}
        </h3>

      </div>

    </div>

  </section>
</template>