<script setup lang="ts">
interface HeroButtonType {
  title: string
  href: string
  type: 'primary' | 'secondary' | 'tertiary'
}

import { onMounted, ref } from 'vue'

const hero = ref(null)

const { img, alt, type, title, buttons } = defineProps({
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
  type: {
    type: String,
    default() {
      return 'inner'
    },
    validator(value: string) {
      return ['home', 'inner'].includes(value)
    },
  },
  title: {
    type: String,
    default() {
      return ''
    },
  },
  buttons: {
    type: Array as PropType<HeroButtonType[]>,
    default() {
      return []
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
          entry.target.classList.add('hero--animate-delay')
          observer.observe(entry?.target)
        }
      })
    },
    {
      threshold: 0.5,
    },
  )

  if (hero?.value) {
    observer.observe(hero.value)
  }
})
</script>

<template>
  <section :class="`hero hero--${type}`" ref="hero">
    <div class="hero__content">
      <h1 v-if="title.length" class="hero__title" v-html="title" />

      <div v-if="buttons.length > 0" class="hero__buttons">
        <NuxtLink
          v-for="(item, index) in buttons"
          :key="`buttons--${index}`"
          :class="`hero__button hero__button--${item.type}`"
          :to="item.href"
          :target="item.href.charAt(0) === '/' ? '_self' : '_blank'"
        >
          {{ item.title }}
        </NuxtLink>
      </div>
    </div>

    <div class="hero__img">
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
        preload
      />
    </div>
  </section>
</template>

<style lang="scss">
.hero {
  position: relative;
  z-index: $zindex-zero;

  &__content {
    position: absolute;
    z-index: $zindex-one;
    top: 50%;
    left: 0;
    transform: translate(0, -50%);
    width: 100%;
  }

  &__title {
    color: $white-colour;
    margin: 0;
    opacity: 0;
    transition: opacity $animation--time ease-in-out;
    transition-delay: $animation--delay;
    @include componentHeadingLarge;

    .hero.hero--animate-delay & {
      opacity: 1;
    }
  }

  &__buttons {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    margin-top: px-to-rem(25px);
    opacity: 0;
    transform: translateY(px-to-rem($animation--transform));
    transition: all $animation--time ease-in-out;
    transition-delay: ($animation--delay * 1.5);

    .hero.hero--animate-delay & {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &__button {
    margin: px-to-rem(2px) px-to-rem(5px);

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }

    &--primary {
      @extend %primaryButton;
    }

    &--secondary {
      @extend %secondaryButton;
    }

    &--tertiary {
      @extend %tertiaryButton;
    }
  }

  &__img {
    position: relative;
    z-index: $zindex-zero;
    width: 100%;
    height: px-to-rem(250px);
    @include imageFilter;

    @media only screen and (min-width: 800px) {
      height: px-to-rem(400px);
    }

    &:before {
      display: block;
      content: '';
      position: absolute;
      z-index: $zindex-one;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: rgba($black-colour, 0.333);
    }

    img {
      position: relative;
      z-index: $zindex-zero;
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &--home {
    .hero__content {
      left: 50%;
      transform: translate(-50%, -50%);
      padding: px-to-rem(20px);
      text-align: center;
    }

    .hero__img {
      height: calc(100vh - #{px-to-rem(140px)});
      min-height: px-to-rem(250px);

      @media only screen and (min-width: 800px) {
        height: calc(100vh - #{px-to-rem(122px)});
        min-height: px-to-rem(400px);
      }
    }

    .hero__buttons {
      justify-content: center;
    }
  }

  &:not(.hero--home) {
    .hero__content {
      @extend %containerDefault;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
