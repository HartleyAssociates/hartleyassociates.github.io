<script setup lang="ts">
const store = useNavigationStore()
</script>

<template>
  <div class="mainmenu" :class="{ 'mainmenu--active': store.mainmenuOpen }">
    <button class="mainmenu__close" @click.prevent="store.toggleMainmenuOpen()">
      <i class="fa-solid fa-xmark" />
    </button>

    <nav v-if="store.mainmenuLinks && store.mainmenuLinks.length > 0" class="mainmenu__nav">
      <div v-for="(item, index) in store.mainmenuLinks" :key="`mainmenuLinks--${index}`" class="mainmenu__nav-div">
        <NuxtLink :to="item.href" class="mainmenu__nav-a" active-class="mainmenu__nav-a--active">
          {{ item.text }}
        </NuxtLink>

        <div v-if="item.children && item.children.length > 0" class="mainmenu__nav-subnav">
          <div
            v-for="(childItem, childIndex) in item.children"
            :key="`mainmenuLinks--${childIndex}`"
            class="mainmenu__nav-div mainmenu__nav-div--subnav"
            :href="childItem.href"
          >
            <NuxtLink
              :to="{ path: childItem.href, hash: childItem.hash }"
              class="mainmenu__nav-a mainmenu__nav-a--subnav"
              active-class="mainmenu__nav-a--active"
              :external="childItem.hash && childItem.hash.length > 0"
            >
              {{ childItem.text }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<style lang="scss">
.mainmenu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  z-index: $zindex-menu;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: translateX(-100%);
  background: $primary-colour;

  &--active {
    transform: translateX(0);
  }

  &__close {
    position: absolute;
    z-index: $zindex-two;
    top: px-to-rem(20px);
    right: px-to-rem(20px);
    background: none;
    border: 0;
    outline: 0;
    padding: 0;
    color: $white-colour;
    font-size: px-to-rem(28px);
    line-height: 1;
  }

  &__nav {
    position: relative;
    z-index: $zindex-one;
    max-width: px-to-rem(480px);
    max-height: 100%;
    padding: px-to-rem(20px);
    margin: 0 auto;
    overflow-y: scroll;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    // @media only screen and (min-width: 800px) {
    //   padding: px-to-rem(60px) px-to-rem(20px);
    // }

    &::-webkit-scrollbar {
      display: none;
    }

    // &-div {
    // &--subnav { }
    // }

    &-a {
      display: block;
      color: $white-colour;
      margin-bottom: px-to-rem(2px);
      // &--subnav { }

      &:hover,
      &:focus,
      &--active {
        color: $secondary-colour;
      }
    }

    &-subnav {
      padding-left: px-to-rem(24px);
    }
  }
}
</style>
