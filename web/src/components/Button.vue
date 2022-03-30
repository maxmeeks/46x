<template>
  <it-button :disabled="disabled" :icon="icon" :type="type">
    <span>
      <slot />
    </span>
  </it-button>
</template>

<script setup lang="ts">
defineProps({
  type: {
    type: String,
    default: 'primary',
  },
  size: {
    type: String,
  },
  icon: {
    type: String,
  },
  disabled: { type: Boolean },
  loading: { type: Boolean },
})
</script>
