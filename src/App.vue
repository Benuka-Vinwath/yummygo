<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import FooterSection from './components/FooterSection.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="min-h-screen bg-white">
    <NavBar />
    <RouterView />
    <FooterSection />
  </div>
</template>