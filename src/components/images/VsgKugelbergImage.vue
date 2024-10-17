<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'VsgKugelbergImage',
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    }
  }
})
</script>

<template>
  <div class="overflow-hidden">
    <img :src="src" :alt="alt" class="h-full w-full object-cover" />
  </div>
</template>

<style scoped></style>
