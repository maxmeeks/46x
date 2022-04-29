<script setup lang="ts">
import Header from './Header.vue'
import Footer from './Footer.vue'
</script>

<template>
  <div class="flex h-screen bg-white font-inter">
    <div class="flex-1 flex flex-col overflow-hidden">
      <Header />

      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-white">
        <div class="container mx-auto px-6 py-8">
          <slot />
        </div>
      </main>

      <Footer />
    </div>
  </div>
</template>
