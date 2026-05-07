<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import FooterSection from './components/FooterSection.vue'
import CartDrawer from './components/CartDrawer.vue'
import { RouterView } from 'vue-router'
import { useRouter } from 'vue-router'
import { useCart } from './composables/useCart'

const router = useRouter()
const { cartItems, isCartOpen, closeCart, removeItem, updateQuantity } = useCart()

const handleCheckout = () => {
  closeCart()
  router.push('/checkout')
}
</script>

<template>
  <div class="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
    <NavBar />
    <RouterView />
    <FooterSection />
    <CartDrawer
      :is-open="isCartOpen"
      :cart-items="cartItems"
      @close="closeCart"
      @remove-item="removeItem"
      @update-quantity="updateQuantity"
      @checkout="handleCheckout"
    />
  </div>
</template>