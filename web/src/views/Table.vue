<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ message: string }>()

const count = ref(0)
</script>

<template>
  <h1 class="text-3xl font-semibold leading-tight pb-6">Table</h1>
  <div class="table-one columns-2">
    <div class="">
      <label for="input-1"> Test </label>
      <input
        v-model="message"
        id="input-1"
        class="text-sm border-2 border-gray-300 rounded-md h-8"
      />
    </div>
    <div class="">
      <label for="input-1"> Test </label>
      <input
        v-model="message"
        id="input-1"
        class="text-sm border-2 border-gray-300 rounded-md h-8"
      />
    </div>
  </div>
</template>

<style scoped></style>
