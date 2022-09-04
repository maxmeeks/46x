<template>
  <input ref="csvRef" @change="change" type="file" :name="name" />
</template>

<script setup lang="ts">
import { ref, reactive, watch } from 'vue'
import Papa from 'papaparse'
import { CsvImportData } from '../types'
import { useCsvData } from '@/store/useCsvData'

const store = useCsvData()
const { setData } = store
const { setHeaders } = store

const importData = reactive<CsvImportData>({
  inputName: 'csv',
  file: null,
  rawCsv: null,
  errors: [],
})

const csvRef = ref<any>(null)
const name = ref<string>('csv')
const headers = ref<any[]>([])
const data = ref<any[]>([])

const validate = function (file: any): boolean {
  importData.errors = []

  if (!file) {
    importData.errors.push('No file')
  }

  // todo: if file isn't a csv reject it
  return true
}

const change = function () {
  const tmpFile = csvRef.value.files ? csvRef.value.files[0] : null
  if (validate(tmpFile)) {
    importData.file = tmpFile
  }
}

watch(
  importData,
  () => {
    Papa.parse(importData.file as File, {
      header: true,
      complete: function (results, file) {
        headers.value = results.meta['fields'] as []
        data.value = results.data as []
        data.value = data.value.map((x,i)=> {
          return {
            id:i, 
            ...x
          }
        });
        setData(data.value)
        setHeaders(headers.value)
      },
    })
  },
  { deep: true }
)
</script>

<style lang="scss"></style>
