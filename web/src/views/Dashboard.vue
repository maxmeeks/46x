<script setup lang="ts">
import { ref } from 'vue'
import ImportCsv from '../components/ImportCsv.vue'
import { storeToRefs } from 'pinia'
import { useUploadStore } from '../store/useUploadStore'
import TitleBar from '@/components/TitleBar.vue'

const store = useUploadStore()
const { data } = storeToRefs(store)
</script>

<template>
  <h1 class="text-3xl font-semibold leading-tight pb-6">Dashboard</h1>
  <ImportCsv />

  <ul>
    <li v-for="item in data">{{ item }}</li>
  </ul>
</template>

<style scoped></style>
