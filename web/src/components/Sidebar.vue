<script setup lang="ts">
import { ref } from 'vue'
import { useSidebar } from '@/hooks/useSidebar'
import Icon from '@/components/Icon.vue'

const { isOpen } = useSidebar()
const activeClass = ref(
  'text-black font-bold bg-black bg-opacity-10 border-l-4 border-gray-900'
)
const inactiveClass = ref('text-black hover:opacity-75 hover:text-black')
</script>

<template>
  <div class="flex">
    <div
      :class="isOpen ? 'block' : 'hidden'"
      @click="isOpen = false"
      class="fixed inset-0 z-30 transition-opacity bg-black opacity-50 lg:hidden"
    ></div>

    <div
      :class="isOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'"
      class="fixed inset-y-0 left-0 z-30 w-16 overflow-y-auto transition duration-300 transform bg-white lg:translate-x-0 lg:static lg:inset-0 border-r border-r-gray-200"
    >
      <div class="flex items-center justify-center mt-8">
        <div class="flex items-center">
          <span class="mx-2 text-2xl font-bold text-black">46x</span>
        </div>
      </div>

      <nav class="mt-10 flex flex-col items-center justify-start">
        <router-link
          class="flex justify-center w-full py-2 mt-4"
          :class="[$route.name === 'Dashboard' ? activeClass : inactiveClass]"
          to="/"
        >
          <it-icon name="dashboard" outlined />
        </router-link>

        <router-link
          class="flex justify-center w-full py-2 mt-4"
          :class="[$route.name === 'Table' ? activeClass : inactiveClass]"
          to="/table"
        >
          <it-icon name="toc" outlined />
        </router-link>
      </nav>
    </div>
  </div>
</template>
