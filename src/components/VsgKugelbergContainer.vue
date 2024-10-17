<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'VsgKugelbergContainer'
})
</script>

<template>
  <div class="mx-auto flex flex-col items-center justify-center max-w-screen-xl px-4">
    <slot />
  </div>
</template>
