<script lang="ts">
import { defineComponent } from 'vue'
import VsgKugelbergSection from '@/components/sections/VsgKugelbergSection.vue'

export default defineComponent({
  name: 'VsgKugelbergHeroSection',
  components: { VsgKugelbergSection }
})
</script>

<template>
  <VsgKugelbergSection class="vsgkugelberg-hero-section">
    <slot />
  </VsgKugelbergSection>
</template>

<style scoped>
.vsgkugelberg-hero-section {
  @apply to-primary-300 flex max-h-screen min-h-screen flex-col items-center justify-center bg-gradient-to-br from-primary-100 py-32 text-white;
}
</style>
