<script setup lang="ts">
const { textAlignment, imageType, title, description, link, linkText, image, alt } = defineProps({
  textAlignment: {
    type: String,
    default() {
      return 'left'
    },
    validator(value: string) {
      return ['right', 'left'].includes(value)
    },
  },
  imageType: {
    type: String,
    default() {
      return 'landscape'
    },
    validator(value: string) {
      return ['portrait', 'landscape'].includes(value)
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
  <SectionComponent :class="`image-text image-text--${textAlignment} image-text--${imageType}`">
    <div class="image-text__container">
      <div
        v-if="title.length > 0 || description.length > 0"
        class="image-text__text image-text__col image-text__col--2"
      >
        <h3 v-if="title.length > 0" class="image-text__title" v-html="title" />

        <p v-if="description.length > 0" class="image-text__description">
          {{ description }}
        </p>

        <NuxtLink v-if="link.length > 0 || linkText.length > 0" :to="link">
          {{ linkText }}
          <i class="fa-solid fa-arrow-right" />
        </NuxtLink>
      </div>

      <div v-if="image.length > 0" class="image-text__image image-text__col image-text__col--2">
        <NuxtImg
          :src="image"
          width="550"
          height="300"
          :alt="alt"
          densities="x1 x2"
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
  @include columnsMixin;

  &__container {
    align-items: center;
  }

  &__text {
    @extend %ugc;
    text-align: center;

    @media only screen and (min-width: 1024px) {
      text-align: left;
    }
  }

  &__title {
    @include componentHeading;
    @include componentHeadingDefault;
    margin: 0;
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

      @media only screen and (max-width: 799px) {
        max-width: px-to-rem(440px);
        margin: 0 auto;
      }
    }
  }

  &--right {
    .image-text__container {
      @media only screen and (min-width: 1024px) {
        flex-direction: row-reverse;
      }
    }
  }

  &:not(.image-text--portrait) {
    .image-text__col {
      @media only screen and (min-width: 800px) and (max-width: 1023px) {
        flex: 1 0 100%;
      }
    }
  }

  &--portrait {
    .image-text__col--2 {
      &.image-text__text {
        @media only screen and (min-width: 800px) {
          flex: 1 0 calc(75% - #{px-to-rem(math.div(20px, 2))});
        }

        @media only screen and (min-width: 1024px) {
          flex: 1 0 calc(75% - #{px-to-rem(math.div(30px, 2))});
        }

        @media only screen and (min-width: 1200px) {
          flex: 1 0 calc(75% - #{px-to-rem(math.div(50px, 2))});
        }
      }

      &.image-text__image {
        @media only screen and (min-width: 800px) {
          flex: 1 0 calc(25% - #{px-to-rem(math.div(20px, 2))});
        }

        @media only screen and (min-width: 1024px) {
          flex: 1 0 calc(25% - #{px-to-rem(math.div(30px, 2))});
        }

        @media only screen and (min-width: 1200px) {
          flex: 1 0 calc(25% - #{px-to-rem(math.div(50px, 2))});
        }
      }
    }
  }
}
</style>
