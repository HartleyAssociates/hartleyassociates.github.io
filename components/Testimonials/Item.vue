<script setup lang="ts">
const { text, name, title } = defineProps({
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
})
</script>

<template>
  <blockquote class="testimonials__quote">
    <p v-if="text.length > 0" class="testimonials__text">{{ text }}</p>

    <cite v-if="name.length > 0 && title.length > 0" class="testimonials__cite">
      <strong>{{ name }}</strong>

      <span>{{ title }}</span>
    </cite>
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

  &__text {
    flex: 1;
    display: block;
    margin: 0;
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
