<script setup lang="ts">
const { idProp, marginTop, title, cards } = defineProps({
  idProp: {
    type: String,
    default() {
      return ''
    },
  },
  marginTop: {
    type: String,
    default() {
      return 'zero'
    },
    validator(value: string) {
      return ['minus', 'zero'].includes(value)
    },
  },
  title: {
    type: String,
    default() {
      return ''
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
  <SectionComponent :class="`card-grid card-grid--${marginTop}`" :id-prop="idProp">
    <div class="card-grid__wrapper">
      <div v-if="title.length > 0" class="card-grid__text">
        <h2 class="card-grid__title" v-html="title" />
      </div>

      <div v-if="cards.length > 0" class="card-grid__container card-grid__container--stretch">
        <div v-for="(item, index) in cards" :key="index" class="card-grid__col card-grid__col--3">
          <CardElement v-bind="item" />
        </div>
      </div>
    </div>
  </SectionComponent>
</template>

<style lang="scss">
.card-grid {
  @include columnsMixin;

  &__wrapper {
    @extend %containerDefault;
  }

  &__text {
    @extend %ugc;
    text-align: center;

    & + .card-grid__container {
      margin-top: px-to-rem(20px);

      @media only screen and (min-width: 800px) {
        margin-top: px-to-rem(50px);
      }
    }
  }

  &__title {
    @include componentHeadingDefault;
    @include componentHeading;
  }

  &__container {
    padding: 0;

    @media only screen and (max-width: 799px) {
      max-width: px-to-rem(440px);
    }
  }

  &--minus {
    z-index: $zindex-grid-minus;

    @media only screen and (min-width: 800px) {
      margin-top: px-to-rem(-60px);
    }

    &.section {
      @media only screen and (min-width: 800px) {
        padding-top: 0;
      }

      @media only screen and (min-width: 1024px) {
        padding-top: 0;
      }
    }
  }
}
</style>
