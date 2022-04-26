<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useCsvData } from '@/store/useCsvData'

const { row } = useCsvData()
const route = useRoute()

const id = route.params.id

const detail = row(parseInt(id as string))
</script>

<template>
  <hr class="mt-5 -mb-5" />
  <div>
    {{ detail }}
  </div>
</template>

<style scoped></style>
