<template>
  <div class="body-container">
    <HeaderElement />
    <MainMenu />
    <main class="main-container">
      <slot />
    </main>
    <FooterElement />
  </div>
</template>

<style lang="scss">
.body-container,
.main-container {
  position: relative;
  z-index: $zindex-zero;
}

.body-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  position: relative;
  z-index: $zindex-zero;
  overflow: scroll;
  overflow-x: hidden;
  height: 100%;
  scroll-behavior: smooth;
  padding-top: px-to-rem(140px);

  @media only screen and (min-width: 800px) {
    padding-top: px-to-rem(122px);
  }
}
</style>
