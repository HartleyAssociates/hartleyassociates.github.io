<script setup lang="ts">
const route = useRoute()
const store = useNavigationStore()

watch(
  () => route.fullPath,
  () => {
    if (store.mainmenuOpen) {
      store.toggleMainmenuOpen()
    }
  },
)
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
html,
body,
#__nuxt {
  display: block;
  position: fixed;
  z-index: $zindex-zero;
  overflow: hidden;
  height: 100%;
  width: 100%;
}

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

.page-enter-active,
.page-leave-active {
  transition: all 0.5s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
