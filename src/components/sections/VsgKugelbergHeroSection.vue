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
  @apply flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-primary-100 to-primary-200 py-32 text-white;
}
</style>
