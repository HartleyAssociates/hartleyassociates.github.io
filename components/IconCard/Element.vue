<script setup lang="ts">
const { icon, title, description, idProp } = defineProps({
  icon: {
    type: String,
    default() {
      return 'arrow-right'
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
  idProp: {
    type: String,
    default() {
      return ''
    },
  },
})
</script>

<template>
  <div class="icon-card">
    <div v-if="idProp.length > 0" :id="idProp" class="icon-card__scrollTo" />

    <div class="icon-card__icon">
      <i
        :class="`fa-duotone fa-${icon}`"
        style="
          --fa-primary-color: #4d7e3e;
          --fa-secondary-color: #31c48d;
          --fa-primary-opacity: 1;
          --fa-secondary-opacity: 1;
        "
      />
    </div>

    <div class="icon-card__text">
      <p v-if="title.length > 0" class="icon-card__title">{{ title }}</p>

      <p v-if="description.length > 0" class="icon-card__description">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<style lang="scss">
.icon-card {
  position: relative;
  z-index: $zindex-zero;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: px-to-rem(10px);

  &__scrollTo {
    position: absolute;
    z-index: $zindex-zero;
    width: 100%;
    height: px-to-rem(1px);
    left: 0;
    top: px-to-rem(-140px);

    @media only screen and (min-width: 800px) {
      top: px-to-rem(-122px);
    }
  }

  &__icon {
    position: relative;
    z-index: $zindex-zero;
    width: px-to-rem(50px);

    i {
      font-size: px-to-rem(40px);
      line-height: 1;
      // color: $secondary-colour;
    }
  }

  &__text {
    position: relative;
    z-index: $zindex-zero;
    @extend %ugc;
    flex: 0 0 calc(100% - #{px-to-rem(50px + 10px)});
  }

  &__title {
    @extend %heading;
  }

  //   &__description { }
}
</style>
