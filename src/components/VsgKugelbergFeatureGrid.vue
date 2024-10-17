<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'VsgKugelbergFeatureGrid'
})
</script>

<template>
  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
    <slot />
  </div>
</template>

<style scoped></style>
