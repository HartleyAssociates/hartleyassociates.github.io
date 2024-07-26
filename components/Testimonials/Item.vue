<script setup lang="ts">
const { text, name, title, link } = defineProps({
  text: {
    type: String,
    default() {
      return ''
    },
  },
  name: {
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
  link: {
    type: String,
    default() {
      return ''
    },
  },
})
</script>

<template>
  <blockquote class="testimonials__quote">
    <component
      :is="link.length > 0 ? 'a' : 'div'"
      :href="link.length > 0 ? link : null"
      :target="link.length > 0 ? '_blank' : null"
      class="testimonials__quote-container"
    >
      <p v-if="text.length > 0" class="testimonials__text">{{ text }}</p>

      <cite v-if="name.length > 0 || title.length > 0" class="testimonials__cite">
        <strong v-if="name.length > 0">{{ name }}</strong>

        <span v-if="title.length > 0">{{ title }}</span>
      </cite>
    </component>
  </blockquote>
</template>

<style lang="scss">
.testimonials {
  &__quote {
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: flex-start;
    height: 100%;
    background: $background-colour;
    padding: px-to-rem(20px);
    box-shadow: 0 px-to-rem(10px) px-to-rem(50px) 0 rgba($black-colour, 0.07);
    border-bottom: px-to-rem(3px) solid $primary-colour;
    margin: 0;
  }

  &__quote-container {
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: flex-start;
    height: 100%;

    &:link:hover,
    &:link:focus {
      opacity: 0.5;
      transition: opacity 250ms ease-in-out;
    }
  }

  &__text {
    flex: 1;
    display: block;
    margin: 0;
    color: $text-colour;
  }

  &__cite {
    display: block;
    margin: px-to-rem(12px) 0 0;
    color: $title-colour;
    font-style: normal;
    font-size: px-to-rem(13px);

    strong,
    span {
      display: block;
    }

    span {
      margin: px-to-rem(2px) 0 0;
      color: $primary-colour;
    }
  }
}
</style>
