<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useCsvData } from '@/store/usecsvData'

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
