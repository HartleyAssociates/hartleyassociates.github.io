<script setup lang="ts">
const { idProp } = defineProps({
  idProp: {
    type: String,
    default() {
      return ''
    },
  },
})
</script>

<template>
  <section class="section">
    <div v-if="idProp.length > 0" :id="idProp" class="section__scrollTo" />
    <slot />
  </section>
</template>

<style lang="scss">
.section {
  position: relative;
  z-index: $zindex-zero;
  padding: px-to-rem($section-padding--mobile) 0;

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
}
</style>
