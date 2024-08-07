<script setup lang="ts">
const { idProp, title, description, cards, rowSize } = defineProps({
  idProp: {
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
  description: {
    type: String,
    default() {
      return ''
    },
  },
  cards: {
    type: Array as PropType<IconCardType[]>,
    default() {
      return []
    },
  },
  rowSize: {
    type: Number,
    default() {
      return 3
    },
    validator(value: number) {
      return [2, 3].includes(value)
    },
  },
})
</script>

<template>
  <SectionComponent class="icon-card-grid" :id-prop="idProp">
    <div class="icon-card-grid__wrapper">
      <div v-if="title.length > 0 || description.length > 0" class="icon-card-grid__text">
        <h2 v-if="title.length > 0" class="icon-card-grid__title" v-html="title" />

        <p v-if="description.length > 0" class="icon-card-grid__description">
          {{ description }}
        </p>
      </div>

      <div v-if="cards.length > 0" class="icon-card-grid__container icon-card-grid__container--stretch">
        <div v-for="(item, index) in cards" :key="index" :class="`icon-card-grid__col icon-card-grid__col--${rowSize}`">
          <IconCardElement v-bind="item" />
        </div>
      </div>
    </div>
  </SectionComponent>
</template>

<style lang="scss">
.icon-card-grid {
  @include columnsMixin;

  &__wrapper {
    @extend %containerDefault;
  }

  &__text {
    @extend %ugc;
    text-align: center;
  }

  &__title {
    @include componentHeadingDefault;
    @include componentHeading;
  }

  &__text {
    max-width: px-to-rem(800px);
    margin: 0 auto;

    & + .icon-card-grid__container {
      margin-top: px-to-rem(20px);

      @media only screen and (min-width: 800px) {
        margin-top: px-to-rem(50px);
      }
    }
  }

  &__container {
    padding: 0;
  }
}
</style>
