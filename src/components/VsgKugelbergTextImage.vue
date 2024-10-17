<script lang="ts">
import { defineComponent } from 'vue'
import MyImage from '@/components/images/VsgKugelbergImage.vue'

export default defineComponent({
  name: 'VsgKugelbergTextImage',
  components: { MyImage },
  props: {
    imageUrl: {
      type: String,
      required: true
    },
    imageAlt: {
      type: String,
      required: true
    },
    reverse: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    getTextClasses() {
      return this.reverse ? 'order-2 lg:order-2' : 'order-2 lg:order-1'
    },
    getImageClasses() {
      return this.reverse ? 'order-1 lg:order-1' : 'order-1 lg:order-2'
    }
  }
})
</script>

<template>
  <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
    <div class="flex flex-col items-center justify-center" :class="getTextClasses">
      <slot />
    </div>
    <div class="flex items-center justify-center" :class="getImageClasses">
      <MyImage :src="imageUrl" :alt="imageAlt" />
    </div>
  </div>
</template>

<style scoped></style>
