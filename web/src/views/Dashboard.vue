<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCsvData } from '@/store/useCsvData'
import { ref } from 'vue'
import Button from '@/components/Button.vue'

const store = useCsvData()
const { data } = storeToRefs(store)

const uploadModal = ref<boolean>(false)
</script>

<template>
  <Button @click="uploadModal = true" icon="note_add">Import File</Button>
  <it-modal v-model="uploadModal">
    <template #body>
      <div class="upload">
        <h2>Import CSV</h2>

        <it-input type="file" class="py-2" />

        <it-button
          block
          type="primary"
          @click="uploadModal = false"
          class="mt-5"
          >Import</it-button
        >
      </div>
    </template>
  </it-modal>
</template>

<style scoped></style>
