<script lang="ts">
import { defineComponent } from 'vue'
import VsgKugelbergContainer from '@/components/VsgKugelbergContainer.vue'

export default defineComponent({
  name: 'VsgKugelbergSection',
  components: { VsgKugelbergContainer },
  inheritAttrs: false
})
</script>

<template>
  <section class="vsgkugelberg-section" v-bind="$attrs">
    <VsgKugelbergContainer>
      <slot />
    </VsgKugelbergContainer>
  </section>
</template>

<style scoped>
.vsgkugelberg-section {
  @apply flex flex-col py-16 md:py-24 lg:py-32;
}
</style>
