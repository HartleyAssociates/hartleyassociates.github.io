<script setup lang="ts">
const { marginTop, cards } = defineProps({
  marginTop: {
    type: String,
    default() {
      return "zero";
    },
    validator(value: string) {
      return ["minus", "zero"].includes(value);
    },
  },
  cards: {
    type: Array as PropType<CardType[]>,
    default() {
      return [];
    },
  },
});
</script>

<template>
  <SectionComponent :class="`card-grid card-grid--${marginTop}`">
    <div v-if="cards.length > 0" class="card-grid__container">
      <div v-for="(item, index) in cards" :key="index" class="card-grid__col">
        <CardElement v-bind="item" />
      </div>
    </div>
  </SectionComponent>
</template>

<style lang="scss">
.card-grid {
  &.section {
    @media only screen and (min-width: 800px) {
      padding-top: 0;
    }

    @media only screen and (min-width: 1024px) {
      padding-top: 0;
    }
  }

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
      max-width: 440px;
    }
  }

  &__col {
    flex: 1 0 100%;

    @media only screen and (min-width: 800px) {
      flex: 1 0 calc(33.333% - #{px-to-rem(100px / 3)});
    }
  }

  &--minus {
    z-index: $zindex-grid-minus;

    @media only screen and (min-width: 800px) {
      margin-top: px-to-rem(-60px);
    }
  }
}
</style>
