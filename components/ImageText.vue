<script setup lang="ts">
const { textAlignment, title, description, link, linkText, image, alt } = defineProps({
  textAlignment: {
    type: String,
    default() {
      return 'left'
    },
    validator(value: string) {
      return ['right', 'left'].includes(value)
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
  link: {
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
  image: {
    type: String,
    default() {
      return 'https://placehold.co/550x300'
    },
  },
  alt: {
    type: String,
    default() {
      return ''
    },
  },
})
</script>

<template>
  <SectionComponent :class="`image-text image-text--${textAlignment}`">
    <div class="image-text__container">
      <div v-if="title.length > 0 || description.length > 0" class="image-text__text image-text__col">
        <h3 v-if="title.length > 0" class="image-text__title" v-html="title" />

        <p v-if="description.length > 0" class="image-text__description">
          {{ description }}
        </p>

        <NuxtLink v-if="link.length > 0 || linkText.length > 0" :to="link">
          {{ linkText }}
          <i class="fa-solid fa-arrow-right" />
        </NuxtLink>
      </div>

      <div v-if="image.length > 0" class="image-text__image image-text__col">
        <NuxtImg
          :src="image"
          width="550"
          height="300"
          :alt="alt"
          densities="x1 x2 x3"
          :placeholder="[550, 300]"
          format="webp"
          quality="80"
          loading="lazy"
        />
      </div>
    </div>
  </SectionComponent>
</template>

<style lang="scss">
@use 'sass:math';
.image-text {
  &__container {
    @extend %containerDefault;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    grid-column-gap: px-to-rem(50px);
    grid-row-gap: px-to-rem(50px);

    @media only screen and (min-width: 800px) and (max-width: 1199px) {
      max-width: px-to-rem(800px);
    }
  }

  &__col {
    flex: 1 0 100%;

    @media only screen and (min-width: 1200px) {
      flex: 1 0 calc(50% - #{px-to-rem(math.div(50px, 2))});
    }
  }

  &__text {
    @extend %ugc;

    @media only screen and (max-width: 1199px) {
      text-align: center;
    }
  }

  &__title {
    font-size: px-to-rem(32px);
    margin: 0;

    @media only screen and (max-width: 799px) {
      font-size: px-to-rem(20px);
    }

    i {
      display: block;
      color: $primary-colour;
    }
  }

  &__description {
    margin: px-to-rem(20px) 0 px-to-rem(30px);
  }

  &__link {
    margin: 0;

    i {
      font-size: 70%;
      line-height: 100%;
      margin-left: px-to-rem(5px);
    }
  }

  &__image {
    display: block;

    img {
      display: block;
      width: 100%;
      height: auto;
    }
  }

  &--right {
    .image-text__container {
      @media only screen and (min-width: 1200px) {
        flex-direction: row-reverse;
      }
    }
  }
}
</style>
