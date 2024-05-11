<template>
  <SectionComponent class="accreditations-icons">
    <div class="accreditations-icons__container">
      <div class="accreditations-icons__col accreditations-icons__col--4">
        <NuxtLink to="/" title="Hartley Associates Logo" class="accreditations-icons__logo">
          <LogoMain />
        </NuxtLink>
      </div>

      <div class="accreditations-icons__col accreditations-icons__col--4">
        <NuxtLink to="/" title="Hartley Associates Logo" class="accreditations-icons__logo">
          <LogoMain />
        </NuxtLink>
      </div>

      <div class="accreditations-icons__col accreditations-icons__col--4">
        <NuxtLink to="/" title="Hartley Associates Logo" class="accreditations-icons__logo">
          <LogoMain />
        </NuxtLink>
      </div>

      <div class="accreditations-icons__col accreditations-icons__col--4">
        <NuxtLink to="/" title="Hartley Associates Logo" class="accreditations-icons__logo">
          <LogoMain />
        </NuxtLink>
      </div>
    </div>
  </SectionComponent>
</template>

<style lang="scss">
.accreditations-icons {
  @include columnsMixin;

  &__container {
    align-items: center;

    @media only screen and (max-width: 799px) {
      max-width: px-to-rem(440px);
    }
  }

  &__logo {
    display: block;
    width: 100%;

    @media only screen and (max-width: 799px) {
      padding: px-to-rem(20px) 0;
    }

    svg {
      display: block;
      width: 100%;
      height: auto;
    }
  }
}
</style>
