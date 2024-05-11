<script setup lang="ts">
const store = useTestimonialsStore()
const testimonials = store.getTestimonials()
</script>

<template>
  <SectionComponent class="testimonials">
    <div v-if="testimonials.length > 0" class="testimonials__container">
      <div v-for="(item, index) in testimonials" :key="`testimonials--${index}`" class="testimonials__col">
        <blockquote class="testimonials__quote">
          <p v-if="item.text && item.text.length > 0" class="testimonials__text">{{ item.text }}</p>

          <cite
            v-if="item.name && item.name.length > 0 && item.title && item.title.length > 0"
            class="testimonials__cite"
          >
            <strong>{{ item.name }}</strong>
            <span>{{ item.title }}</span>
          </cite>
        </blockquote>
      </div>
    </div>
  </SectionComponent>
</template>

<style lang="scss">
@use 'sass:math';
.testimonials {
  &__container {
    @extend %containerDefault;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: stretch;
    grid-column-gap: px-to-rem(50px);
    grid-row-gap: px-to-rem(20px);

    @media only screen and (max-width: 799px) {
      max-width: px-to-rem(440px);
    }
  }

  &__col {
    flex: 1 0 100%;

    @media only screen and (min-width: 800px) {
      flex: 1 0 calc(50% - #{px-to-rem(math.div(50px, 2))});
    }
  }

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
