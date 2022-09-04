<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useCsvData } from '@/store/useCsvData'

import ImportCsv from '@/components/ImportCsv.vue'

const store = useCsvData()
const { data } = storeToRefs(store)
const { headers } = storeToRefs(store)

const showModal = ref<boolean>(false)
</script>

<template>
  <ImportCsv />

  <div
    class="table-data border border-gray-100 shadow-sm rounded-lg my-6"
    v-if="data"
  >
    <table class="border-none w-full">
      <thead>
        <tr class="w-full">
          <th class="p-2 text-left" v-for="item in headers">
            {{ item }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="w-full row" v-for="(row, index) in data">
          <template v-for="(item, name) in row">
            <td v-if="name.toString() != 'id'">
              <router-link class="block w-full h-full" :to="{ path: '/detail/' + index }">
                <div class="p-2 text-left">
                  {{ item }}
                </div>
              </router-link>
            </td>
          </template> 
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>

.row {
  @apply bg-grey-100;

  &:nth-child(odd) {
    background: #fff;
  }
}
</style>
