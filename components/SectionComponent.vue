<script setup lang="ts">
import { onMounted, ref } from 'vue'

const section = ref(null)

const { idProp } = defineProps({
  idProp: {
    type: String,
    default() {
      return ''
    },
  },
})

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return
        }

        if (entry.isIntersecting) {
          entry.target.classList.add('section--animate-delay')
          observer.observe(entry?.target)
        }
      })
    },
    {
      threshold: 0.5,
    },
  )

  if (section?.value) {
    observer.observe(section.value)
  }
})
</script>

<template>
  <section class="section" ref="section">
    <div v-if="idProp.length > 0" :id="idProp" class="section__scrollTo" />
    <slot />
  </section>
</template>

<style lang="scss">
.section {
  position: relative;
  z-index: $zindex-zero;
  padding: px-to-rem($section-padding--mobile) 0;
  opacity: 0;
  transform: translateY($animation--transform);

  @media (prefers-reduced-motion) {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }

  @media only screen and (min-width: 800px) {
    padding: px-to-rem($section-padding--tablet) 0;
  }

  @media only screen and (min-width: 1024px) {
    padding: px-to-rem($section-padding--desktop) 0;
  }

  &__scrollTo {
    position: absolute;
    z-index: $zindex-zero;
    width: 100%;
    height: px-to-rem(1px);
    left: 0;
    top: px-to-rem(-140px);

    @media only screen and (min-width: 800px) {
      top: px-to-rem(-122px);
    }
  }

  &.section--animate-delay {
    animation-duration: $animation--time;
    animation-fill-mode: both;
    animation-name: fadeIn;
  }
}
</style>
