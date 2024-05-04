<script setup lang="ts">
const route = useRoute();
const store = useNavigationStore();

watch(
  () => route.fullPath,
  () => {
    if (store.mainmenuOpen) {
      store.toggleMainmenuOpen();
    }
  }
);
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

.page-enter-active,
.page-leave-active {
  transition: all 0.5s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
