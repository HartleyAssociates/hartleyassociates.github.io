<script setup lang="ts">
const { image, title, description, linkText, link } = defineProps({
  image: {
    type: String,
    default() {
      return 'https://placehold.co/350x200'
    },
  },
  alt: {
    type: String,
    default() {
      return ''
    },
  },
  title: {
    type: String,
    default() {
      return ''
    },
  },
  description: {
    type: String,
    default() {
      return ''
    },
  },
  linkText: {
    type: String,
    default() {
      return ''
    },
  },
  link: {
    type: String,
    default() {
      return ''
    },
  },
})
</script>

<template>
  <div class="card">
    <div v-if="image && image.length > 0" class="card__image">
      <NuxtImg
        :src="image"
        width="700"
        height="400"
        :alt="alt"
        densities="x1 x2"
        :placeholder="[700, 400]"
        format="webp"
        quality="100"
        loading="lazy"
      />
    </div>

    <div class="card__text">
      <p v-if="title" class="card__title">{{ title }}</p>

      <p v-if="description" class="card__description">{{ description }}</p>

      <NuxtLink
        v-if="link && linkText"
        class="card__link"
        :to="link"
        :target="link.charAt(0) === '/' ? '_self' : '_blank'"
      >
        {{ linkText }}
        <i class="fa-solid fa-arrow-right" />
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="scss">
.card {
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  height: 100%;
  box-shadow: 0 px-to-rem(10px) px-to-rem(50px) 0 rgba($black-colour, 0.07);
  background: $background-colour;

  &__image {
    display: block;
    width: 100%;
    flex-grow: 0;
    flex-shrink: 0;
    @include imageFilter;

    img {
      display: block;
      width: 100%;
      height: auto;
      margin: 0;
    }
  }

  &__text {
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    flex: 1;
    padding: px-to-rem(20px);
    text-align: center;
    border-bottom: px-to-rem(3px) solid $primary-colour;
  }

  &__title {
    font-size: px-to-rem(20px);
    @extend %heading;
  }

  // &__description { }

  &__link {
    margin: auto 0 0;

    i {
      font-size: 70%;
      line-height: 100%;
      margin-left: px-to-rem(5px);
    }
  }
}
</style>
