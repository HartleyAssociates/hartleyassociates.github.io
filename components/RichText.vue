<script setup lang="ts">
const { idProp, alignment } = defineProps({
  idProp: {
    type: String,
    default() {
      return ''
    },
  },
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
  <SectionComponent class="rich-text" :id-prop="idProp">
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
