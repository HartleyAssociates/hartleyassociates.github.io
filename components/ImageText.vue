<script setup lang="ts">
const {
  idProp,
  containerWidth,
  textAlignment,
  imageType,
  title,
  description,
  link,
  linkText,
  linkTwo,
  linkTwoText,
  image,
  imageHeight,
  imageWidth,
  alt,
} = defineProps({
  idProp: {
    type: String,
    default() {
      return ''
    },
  },
  containerWidth: {
    type: String,
    default() {
      return 'default'
    },
    validator(value: string) {
      return ['slender', 'default'].includes(value)
    },
  },
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
  linkTwo: {
    type: String,
    default() {
      return ''
    },
  },
  linkTwoText: {
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
  imageHeight: {
    type: String,
    default() {
      return '300'
    },
  },
  imageWidth: {
    type: String,
    default() {
      return '550'
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
  <SectionComponent
    :class="`image-text image-text--${textAlignment} image-text--${imageType} image-text--${containerWidth}`"
    :id-prop="idProp"
  >
    <div class="image-text__container">
      <div
        v-if="title.length > 0 || description.length > 0"
        class="image-text__text image-text__col image-text__col--2"
      >
        <h3 v-if="title.length > 0" class="image-text__title" v-html="title" />

        <p v-if="description.length > 0" class="image-text__description">
          {{ description }}
        </p>

        <div v-if="link.length > 0 || linkText.length > 0" class="image-text__link">
          <NuxtLink :to="link" :target="link.charAt(0) === '/' ? '_self' : '_blank'">
            {{ linkText }}
            <i class="fa-solid fa-arrow-right" />
          </NuxtLink>
        </div>

        <div v-if="linkTwo.length > 0 || linkTwoText.length > 0" class="image-text__link">
          <NuxtLink :to="linkTwo" :target="linkTwo.charAt(0) === '/' ? '_self' : '_blank'">
            {{ linkTwoText }}
            <i class="fa-solid fa-arrow-right" />
          </NuxtLink>
        </div>
      </div>

      <div v-if="image.length > 0" class="image-text__image image-text__col image-text__col--2">
        <NuxtImg
          :src="image"
          :width="imageType !== 'portrait' ? imageWidth : '400'"
          :height="imageType !== 'portrait' ? imageHeight : '500'"
          :alt="alt"
          densities="x1 x2"
          :placeholder="imageType !== 'portrait' ? [Number(imageWidth), Number(imageHeight)] : [400, 500]"
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
    margin: 0;
    @include componentHeadingDefault;
    @include componentHeading;
  }

  &__description {
    margin: px-to-rem(20px) 0 px-to-rem(30px);
  }

  &__link {
    margin: 0;

    & + .image-text__link {
      margin-top: px-to-rem(5px);
    }

    a {
      margin: 0;
    }

    i {
      font-size: 70%;
      line-height: 100%;
      margin-left: px-to-rem(5px);
    }
  }

  &__image {
    display: block;
    @include imageFilter;

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
        flex: 0 0 100%;
      }
    }
  }

  &--portrait {
    .image-text__col--2 {
      &.image-text__text {
        @media only screen and (min-width: 800px) {
          flex: 0 0 calc(65% - #{px-to-rem(math.div(20px, 2))});
        }

        @media only screen and (min-width: 1024px) {
          flex: 0 0 calc(65% - #{px-to-rem(math.div(30px, 2))});
        }

        @media only screen and (min-width: 1200px) {
          flex: 0 0 calc(65% - #{px-to-rem(math.div(50px, 2))});
        }
      }

      &.image-text__image {
        @media only screen and (min-width: 800px) {
          flex: 0 0 calc(35% - #{px-to-rem(math.div(20px, 2))});
        }

        @media only screen and (min-width: 1024px) {
          flex: 0 0 calc(35% - #{px-to-rem(math.div(30px, 2))});
        }

        @media only screen and (min-width: 1200px) {
          flex: 0 0 calc(35% - #{px-to-rem(math.div(50px, 2))});
        }
      }
    }
  }

  &--slender {
    .image-text__container {
      max-width: px-to-rem(940px);
    }
  }
}
</style>
