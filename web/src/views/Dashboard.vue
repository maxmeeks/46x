<script setup lang="ts">
import ImportCsv from '../components/ImportCsv.vue'
import { storeToRefs } from 'pinia'
import { useCsvData } from '@/store/useCsvData'

const store = useCsvData()
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
