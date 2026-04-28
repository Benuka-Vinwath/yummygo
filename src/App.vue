<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import PopularCategories from './components/PopularCategories.vue'
import PopularRestaurants from './components/PopularRestaurants.vue'
import TodayOffers from './components/TodayOffers.vue'
import StatsSection from './components/StatsSection.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<template>
  <div class="min-h-screen bg-white">
    <NavBar />
    <HeroSection />
    <PopularCategories />
    <PopularRestaurants />
    <TodayOffers />
     <StatsSection />
     <FooterSection />
  </div>
</template>