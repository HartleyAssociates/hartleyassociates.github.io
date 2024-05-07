<script setup lang="ts">
const store = useNavigationStore()
</script>

<template>
  <section class="header__main">
    <div class="header__main-container">
      <NuxtLink to="/" title="Hartley Associates Logo" class="header__main-logo">
        <LogoMain />
      </NuxtLink>

      <div class="header__main-right">
        <button class="header__main-burger" title="Menu" @click.prevent="store.toggleMainmenuOpen()">
          <i class="fa-solid fa-bars" />
        </button>

        <NuxtLink to="/contact-us" class="header__main-button"> Send Enquiry </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.header__main {
  display: block;
  background: $background-colour;
  padding: px-to-rem(10px) 0;

  @media only screen and (min-width: 800px) {
    padding: px-to-rem(20px) 0;
  }

  &-container {
    @extend %containerWide;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }

  &-logo {
    display: block;
    width: 200px;
    height: 38px;

    svg {
      display: block;
      width: 100%;
      height: 100%;
    }
  }

  &-right {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: center;
  }

  &-button {
    @extend %primaryButton;
    margin-left: px-to-rem(20px);

    @media only screen and (max-width: 799px) {
      display: none;
    }
  }

  &-burger {
    background: none;
    border: 0;
    outline: 0;
    padding: 0;
    color: $primary-colour;
    font-size: px-to-rem(28px);
    line-height: 1;
  }
}
</style>
