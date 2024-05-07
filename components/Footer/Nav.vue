<script setup lang="ts">
const store = useNavigationStore()
</script>

<template>
  <nav v-if="store.mainmenuLinks && store.mainmenuLinks.length > 0" class="footer__nav">
    <template v-for="(item, index) in store.mainmenuLinks">
      <div
        v-if="item.text !== 'Home' && item.text !== 'Contact Us'"
        :key="`mainmenuLinks--${index}`"
        class="footer__nav-div"
        :href="item.href"
      >
        <NuxtLink :to="item.href" class="footer__nav-a" active-class="footer__nav-a--active">
          {{ item.text }}
        </NuxtLink>

        <div v-if="item.children && item.children.length > 0" class="footer__nav-subnav">
          <div
            v-for="(childItem, childIndex) in item.children"
            :key="`mainmenuLinks--${childIndex}`"
            class="footer__nav-div footer__nav-div--subnav"
            :href="childItem.href"
          >
            <NuxtLink
              :to="childItem.href"
              class="footer__nav-a footer__nav-a--subnav"
              active-class="footer__nav-a--active"
            >
              {{ childItem.text }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </template>
  </nav>
</template>

<style lang="scss">
.footer__nav {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;

  &-div {
    &:not(.footer__nav-div--subnav) {
      padding: px-to-rem(10px);
      width: 100%;

      @media only screen and (min-width: 350px) and (max-width: 1023px) {
        width: 50%;
      }

      @media only screen and (min-width: 1024px) and (max-width: 1199px) {
        width: 25%;
      }

      @media only screen and (min-width: 1200px) {
        width: auto;
        flex: 1;
      }
    }
  }

  &-a {
    display: block;
    color: $white-colour;
    margin-bottom: px-to-rem(2px);
    font-size: px-to-rem(15px);

    &--subnav {
      color: $offwhite-colour;
      font-size: px-to-rem(13px);
      margin-bottom: px-to-rem(5px);
    }

    &:hover,
    &:focus {
      color: $secondary-colour;
    }
  }

  &-subnav {
    padding-top: px-to-rem(5px);
  }
}
</style>
