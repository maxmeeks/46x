<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem, Switch } from '@headlessui/vue'
</script>

<template>
  <div class="header-wrapper flex bg-white justify-center px-4">
    <div class="flex items-center">
      <router-link to="/dashboard" v-slot="{ isActive }">
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header-wrapper {
  height: 80px;
  z-index: 100;
  box-shadow: 0 1px 15px rgb(0 0 0 / 4%), 0 1px 6px rgb(0 0 0 / 4%);
}
</style>
