<script setup lang="ts">
const { img, alt } = defineProps({
  img: {
    type: String,
    default() {
      return 'https://placehold.co/1920x1080'
    },
  },
  alt: {
    type: String,
    default() {
      return 'Placeholder Image'
    },
  },
})
</script>

<template>
  <SectionComponent class="large-image">
    <div class="large-image__container">
      <NuxtImg
        :src="img"
        width="1920"
        height="1080"
        :alt="alt"
        densities="x1 x2"
        :placeholder="[1920, 1080]"
        fit="cover"
        format="webp"
        quality="80"
        loading="lazy"
      />
    </div>
  </SectionComponent>
</template>

<style lang="scss">
.large-image {
  &__container {
    @extend %containerDefault;
    max-width: px-to-rem(980px);
  }

  img {
    width: 100%;
    height: auto;
  }
}
</style>
