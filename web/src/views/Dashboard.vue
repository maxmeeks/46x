<script setup lang="ts">
import { ref } from 'vue'
import ImportCsv from '../components/ImportCsv.vue'
import { storeToRefs } from 'pinia'
import { useUploadStore } from '../store/useUploadStore'

const store = useUploadStore()
const { data } = storeToRefs(store)
</script>

<template>
  <h1 class="text-3xl font-bold">Dashboard</h1>

  <ImportCsv />

  <ul>
    <li v-for="item in data">{{ item }}</li>
  </ul>
</template>

<style scoped></style>
