<script setup lang="ts">
const { marginTop, cards } = defineProps({
  marginTop: {
    type: String,
    default() {
      return 'zero'
    },
    validator(value: string) {
      return ['minus', 'zero'].includes(value)
    },
  },
  cards: {
    type: Array as PropType<CardType[]>,
    default() {
      return []
    },
  },
})
</script>

<template>
  <SectionComponent :class="`card-grid card-grid--${marginTop}`">
    <div v-if="cards.length > 0" class="card-grid__container card-grid__container--stretch">
      <div v-for="(item, index) in cards" :key="index" class="card-grid__col card-grid__col--3">
        <CardElement v-bind="item" />
      </div>
    </div>
  </SectionComponent>
</template>

<style lang="scss">
.card-grid {
  @include columnsMixin;

  &__container {
    @media only screen and (max-width: 799px) {
      max-width: px-to-rem(440px);
    }
  }

  &.section {
    @media only screen and (min-width: 800px) {
      padding-top: 0;
    }

    @media only screen and (min-width: 1024px) {
      padding-top: 0;
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
