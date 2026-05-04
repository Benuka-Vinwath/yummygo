<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import logo from '../assets/logo.png'

const darkMode = ref(false)
const route = useRoute()

const toggleDarkMode = () => {
  darkMode.value = !darkMode.value
  document.documentElement.classList.toggle('dark', darkMode.value)
}

const isActive = (path: string) => route.path === path
</script>

<template>
  <header class="w-full bg-white dark:bg-gray-900">
    
    <!-- 🔹 Top Location Bar -->
    <div class="flex justify-between items-center px-16 py-2 border-b border-gray-200 dark:border-gray-700">
      
      <div class="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-200">
        <span>📍</span>
        <span>No.23, Prince Street, Kaduwela.</span>
        <button class="text-orange-500 underline text-xs">
          Change Location
        </button>
      </div>

      <!-- Right Side -->
      <div class="flex items-center gap-4">

        <!-- Cart Button -->
        <button class="bg-green-500 text-white px-4 py-2 rounded-xl shadow-md text-lg hover:bg-green-600">
          🛒
        </button>

        <!-- Dark Mode Icon (clean style) -->
        <button
          @click="toggleDarkMode"
          class="text-xl text-gray-700 dark:text-white hover:text-orange-500 transition"
        >
          {{ darkMode ? '☀️' : '🌙' }}
        </button>

      </div>
    </div>

    <!-- 🔹 Main Navbar -->
    <nav class="flex justify-between items-center px-16 py-3">
      
      <!-- Logo -->
      <img 
        :src="logo" 
        alt="YummyGo Logo" 
        class="h-16 object-contain"
      />

      <!-- Menu -->
      <ul class="flex items-center gap-5 text-gray-900 dark:text-white">
        <li>
          <RouterLink
            to="/"
            class="px-6 py-2 rounded-full font-semibold transition"
            :class="isActive('/') ? 'bg-orange-500 text-white' : 'hover:bg-orange-100 dark:hover:bg-gray-800'"
          >
            Home
          </RouterLink>
        </li>

        <li>
          <RouterLink
            to="/browse-menu"
            class="px-4 py-2 rounded-full font-medium transition"
            :class="isActive('/browse-menu') ? 'bg-orange-500 text-white' : 'hover:bg-orange-100 dark:hover:bg-gray-800'"
          >
            Browse Menu
          </RouterLink>
        </li>

        <li>
          <button class="px-4 py-2 rounded-full font-medium hover:bg-orange-100 dark:hover:bg-gray-800">
            Special Offers
          </button>
        </li>

        <li>
          <button class="px-4 py-2 rounded-full font-medium hover:bg-orange-100 dark:hover:bg-gray-800">
            Checkout
          </button>
        </li>

        <li>
          <button class="px-4 py-2 rounded-full font-medium hover:bg-orange-100 dark:hover:bg-gray-800">
            Track Order
          </button>
        </li>

      </ul>

      <!-- Login Button -->
      <button class="bg-black text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-orange-500">
        👤 Login/Signup
      </button>

    </nav>
  </header>
</template>