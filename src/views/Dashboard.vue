<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useCsvData } from '@/store/useCsvData'

import ImportCsv from '@/components/ImportCsv.vue'

const store = useCsvData()
const { data } = storeToRefs(store)

const showModal = ref<boolean>(false)
</script>

<template>
  <ImportCsv />

  <hr class="mt-5 -mb-5" />


  <div v-if="data">
    <h2 class="text-blue-500">Current Data</h2>
    <ul>
      <!-- header row -->
      <li v-for="(row, index) in data">
          <router-link
            :to="{path: '/detail/' + index}"
          >
            {{ row }}
          </router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
