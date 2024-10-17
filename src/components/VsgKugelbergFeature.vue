<script lang="ts">
import { type Component, defineComponent } from 'vue'
import TableTennisIcon from '@/components/icons/TableTennisIcon.vue'
import VolleyballIcon from '@/components/icons/VolleyballIcon.vue'
import GymnasticsIcon from '@/components/icons/GymnasticsIcon.vue'
import BadmintonIcon from '@/components/icons/BadmintonIcon.vue'

export default defineComponent({
  name: 'VsgKugelbergFeature',
  components: { TableTennisIcon },
  props: {
    icon: {
      type: String,
      required: true,
      validator: (value: string) => {
        return ['tabletennis', 'volleyball', 'badminton', 'gymnastics'].includes(value)
      }
    },
    title: {
      type: String,
      required: true
    }
  },
  computed: {
    iconComponent(): Component | undefined {
      const iconMap: Record<string, Component> = {
        tabletennis: TableTennisIcon,
        volleyball: VolleyballIcon,
        gymnastics: GymnasticsIcon,
        badminton: BadmintonIcon
      }

      return iconMap[this.icon]
    }
  }
})
</script>

<template>
  <a class="bg-primary-400 flex flex-col items-center justify-center gap-4 rounded p-4 text-white shadow" href="#">
    <component :is="iconComponent" class="lg:h-30 h-16 object-contain text-secondary-100 sm:h-24" />
    <h3 class="mb-4 text-center text-2xl font-bold">
      {{ title }}
    </h3>
    <p class="text-center">
      <slot />
    </p>
  </a>
</template>

<style scoped></style>
