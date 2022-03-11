<script setup lang="ts">
  import { ref } from 'vue'
  import {VueCsvImportPlugin} from "vue-csv-import"
</script>

<template>
  <h1 class="text-3xl font-bold">Dashboard Works</h1>

  <vue-csv-import>
      <vue-csv-input name="file"></vue-csv-input>
  </vue-csv-import>
</template>

<style scoped></style>
