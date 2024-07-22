<script setup lang="ts">
const { type } = defineProps({
  type: {
    type: String,
    default() {
      return 'homepage'
    },
    validator(value: string) {
      return ['homepage', 'listing'].includes(value)
    },
  },
})
const store = useTestimonialsStore()
const testimonials = type === 'homepage' ? store.getTestimonials() : store.getAllTestimonials()
</script>

<template>
  <SectionComponent class="testimonials">
    <div v-if="testimonials.length > 0" class="testimonials__container testimonials__container--stretch">
      <div
        v-for="(item, index) in testimonials"
        :key="`testimonials--${index}`"
        class="testimonials__col testimonials__col--2"
      >
        <TestimonialsItem :text="item?.text ?? ''" :name="item?.name ?? ''" :title="item?.title ?? ''" />
      </div>
    </div>
  </SectionComponent>
</template>

<style lang="scss">
.testimonials {
  @include columnsMixin;

  &__container {
    @media only screen and (max-width: 799px) {
      max-width: px-to-rem(440px);
    }
  }
}
</style>
