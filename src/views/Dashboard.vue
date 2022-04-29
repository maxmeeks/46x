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

  <div class="table-data border border-gray-100 shadow-sm rounded-lg my-6" v-if="data">
    <table class="border-none">
      <tr class="row" v-for="(row, index) in data">
          <router-link
            class="flex-row flex"
            :to="{path: '/detail/' + index}"
          >
            <div class="cell p-2" v-for="item in row">
              {{ item }}
            </div>
          </router-link>
      </tr>
    </table>
  </div>
</template>

<style lang="scss" scoped>
  .row {
    @apply bg-grey-100;

    &:nth-child(odd) {
      background: #FFF;
    } 
  }
</style>
