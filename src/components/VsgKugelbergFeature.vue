<script lang="ts">
import { defineComponent } from 'vue'
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
      validator: (value) => {
        return ['tabletennis', 'volleyball', 'badminton', 'gymnastics'].includes(value)
      }
    },
    title: {
      type: String,
      required: true
    }
  },
  computed: {
    iconComponent() {
      const iconMap = {
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
  <div class="flex flex-col">
    <a class="flex h-32 items-center justify-center fill-primary-100" href="#">
      <component :is="iconComponent" class="w-32 object-contain text-primary-100" />
    </a>
    <div class="p-5">
      <a href="#">
        <h3 class="mb-4 text-center text-3xl font-bold">
          {{ title }}
        </h3>
      </a>
      <p class="text-center">
        <slot />
      </p>
    </div>
  </div>
</template>

<style scoped></style>
