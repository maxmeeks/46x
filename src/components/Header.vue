<script setup lang="ts">
import { useSidebar } from '@/hooks/useSidebar'

const { isOpen } = useSidebar()
</script>

<template>
  <header
    class="flex items-center justify-between px-6 py-2 bg-white border-b border-gray-2"
  >
    <div class="flex items-center">
      <button
        @click="isOpen = true"
        class="text-black focus:outline-none lg:hidden"
      >
        <svg
          class="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 6H20M4 12H20M4 18H11"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>

    <nav>Header</nav>
  </header>
</template>
