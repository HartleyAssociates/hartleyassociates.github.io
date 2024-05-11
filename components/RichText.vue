<script setup lang="ts">
const { alignment } = defineProps({
  alignment: {
    type: String,
    default() {
      return 'left'
    },
    validator(value: string) {
      return ['left', 'right', 'center', 'justify'].includes(value)
    },
  },
})
</script>

<template>
  <SectionComponent class="rich-text">
    <div :class="`rich-text__container rich-text__container--${alignment}`">
      <slot />
    </div>
  </SectionComponent>
</template>

<style lang="scss">
.rich-text {
  &__container {
    @extend %containerDefault;
    @extend %ugc;

    &--right {
      text-align: right;
    }

    &--center {
      text-align: center;
    }

    &--justify {
      text-align: justify;
    }
  }
}
</style>
