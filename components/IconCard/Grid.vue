<script setup lang="ts">
const { title, description, cards } = defineProps({
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
})
</script>

<template>
  <SectionComponent class="icon-card-grid">
    <div class="icon-card-grid__wrapper">
      <div v-if="title.length > 0 || description.length > 0" class="icon-card-grid__text">
        <h2 v-if="title.length > 0" class="icon-card-grid__title" v-html="title" />

        <p v-if="description.length > 0" class="icon-card-grid__description">
          {{ description }}
        </p>
      </div>

      <div v-if="cards.length > 0" class="icon-card-grid__container icon-card-grid__container--stretch">
        <div v-for="(item, index) in cards" :key="index" class="icon-card-grid__col icon-card-grid__col--3">
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
    @include componentHeading;
    @include componentHeadingDefault;
  }

  &__container {
    margin-top: px-to-rem(20px);
    padding: 0;

    @media only screen and (min-width: 800px) {
      margin-top: px-to-rem(50px);
    }
  }
}
</style>
