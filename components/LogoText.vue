<template>
  <SectionComponent class="logo-text">
    <div class="logo-text__container">
      <div class="logo-text__logo logo-text__col">
        <NuxtLink to="/" title="Hartley Associates Logo" class="logo-text__logo-link">
          <LogoMain />
        </NuxtLink>
      </div>

      <div class="logo-text__text logo-text__col">
        <slot />
      </div>
    </div>
  </SectionComponent>
</template>

<style lang="scss">
@use 'sass:math';

.logo-text {
  @include columnsMixin;

  &__logo {
    &.logo-text__col {
      @media only screen and (min-width: 800px) {
        flex: 0 0 px-to-rem(200px);
      }

      @media only screen and (min-width: 1024px) {
        flex: 0 0 px-to-rem(300px);
      }
    }

    &-link {
      display: block;
      width: px-to-rem(200px);
      height: auto;

      @media only screen and (max-width: 799px) {
        width: px-to-rem(300px);
      }

      @media only screen and (min-width: 1024px) {
        width: px-to-rem(300px);
      }

      svg {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }

  &__text {
    @extend %ugc;
    padding-top: px-to-rem(10px);

    @media only screen and (min-width: 800px) {
      padding-top: px-to-rem(23px);
    }

    @media only screen and (min-width: 1024px) {
      padding-top: px-to-rem(40px);
    }

    &.logo-text__col {
      @media only screen and (min-width: 800px) {
        flex: 0 0 calc((100% - #{px-to-rem(200px)}) - #{px-to-rem(20px)});
      }

      @media only screen and (min-width: 1024px) {
        flex: 0 0 calc((100% - #{px-to-rem(300px)}) - #{px-to-rem(30px)});
      }

      @media only screen and (min-width: 1200px) {
        flex: 0 0 calc((100% - #{px-to-rem(300px)}) - #{px-to-rem(50px)});
      }
    }
  }
}
</style>
