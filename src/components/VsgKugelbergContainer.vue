<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'VsgKugelbergContainer'
})
</script>

<template>
  <div class="mx-auto flex max-w-screen-xl flex-col items-center justify-center px-4">
    <slot />
  </div>
</template>
