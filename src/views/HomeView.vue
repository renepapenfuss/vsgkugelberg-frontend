<script lang="ts">
import { defineComponent } from 'vue'
import VsgKugelbergHeroSection from '@/components/sections/VsgKugelbergHeroSection.vue'
import VsgKugelbergTextImage from '@/components/VsgKugelbergTextImage.vue'
import VsgKugelbergSection from '@/components/sections/VsgKugelbergSection.vue'
import VsgKugelbergFeatureGrid from '@/components/VsgKugelbergFeatureGrid.vue'
import VsgKugelbergFeature from '@/components/VsgKugelbergFeature.vue'

export default defineComponent({
  components: {
    VsgKugelbergFeature,
    VsgKugelbergFeatureGrid,
    VsgKugelbergSection,
    VsgKugelbergTextImage,
    VsgKugelbergHeroSection
  }
})
</script>

<template>
  <VsgKugelbergHeroSection>
    <VsgKugelbergTextImage image-url="/images/600x400.png" image-alt="An Image">
      <h1 class="mb-8 text-center text-3xl font-semibold lg:text-left lg:text-5xl">
        Willkommen beim <span class="text-nowrap font-extrabold text-secondary-100">VSG Kugelberg e.V.</span>
      </h1>
      <p class="text-center lg:text-left">
        Dein Sportverein für Tischtennis, Volleyball, Badminton und Gymnastik! Egal, ob du Anfänger oder Profi bist, bei
        uns findest du Spaß, Bewegung und eine tolle Gemeinschaft.
      </p>
    </VsgKugelbergTextImage>
  </VsgKugelbergHeroSection>
  <VsgKugelbergSection>
    <VsgKugelbergTextImage image-url="/images/600x400.png" image-alt="An Image" :reverse="true">
      <h1 class="mb-8 text-center text-3xl font-semibold lg:text-left lg:text-5xl">
        Willkommen beim <span class="text-nowrap font-extrabold text-secondary-100">VSG Kugelberg e.V.</span>
      </h1>
      <p class="text-center lg:text-left">
        Dein Sportverein für Tischtennis, Volleyball, Badminton und Gymnastik! Egal, ob du Anfänger oder Profi bist, bei
        uns findest du Spaß, Bewegung und eine tolle Gemeinschaft.
      </p>
    </VsgKugelbergTextImage>
  </VsgKugelbergSection>
  <VsgKugelbergSection>
    <h1 class="mb-8 text-center text-3xl font-semibold lg:text-left lg:text-5xl">
      Willkommen beim <span class="text-nowrap font-extrabold text-secondary-100">VSG Kugelberg e.V.</span>
    </h1>
    <p class="mb-16 text-center">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
    <VsgKugelbergFeatureGrid>
      <VsgKugelbergFeature icon="tabletennis" title="Tischtennis">
        Erlebe Schnelligkeit und Präzision. Finde bei uns den passenden Spielpartner und verbessere deine Technik.
      </VsgKugelbergFeature>
      <VsgKugelbergFeature icon="volleyball" title="Volleyball">
        Teamwork und Action stehen im Mittelpunkt. Egal ob Anfänger oder Profi, jeder ist willkommen!
      </VsgKugelbergFeature>
      <VsgKugelbergFeature icon="gymnastics" title="Gymnastik">
        Stärke Körper und Geist mit unseren vielseitigen Kursen. Fitness für alle Altersgruppen.
      </VsgKugelbergFeature>
      <VsgKugelbergFeature icon="badminton" title="Badminton">
        Ein dynamisches Spiel für schnelle Reflexe und präzise Schläge. Spaß garantiert!
      </VsgKugelbergFeature>
    </VsgKugelbergFeatureGrid>
  </VsgKugelbergSection>
</template>
