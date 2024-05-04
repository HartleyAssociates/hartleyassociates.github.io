<script setup lang="ts">
const socialMediaLinks = useSocialMediaLinks();
const contactDetails = useContactDetails();
</script>

<template>
  <section class="header__top">
    <div class="header__top-container">
      <div class="header__top-left">
        <nav
          v-if="contactDetails?.linkList && contactDetails.linkList.length > 0"
          class="header__top-left-nav"
        >
          <p
            v-for="(item, index) in contactDetails.linkList"
            :key="`contactDetails--${index}`"
            class="header__top-left-p"
          >
            <span class="header__top-left-span">{{ item.text }}:</span>

            <NuxtLink class="header__top-left-link" :to="item.link">
              {{ item.altText }}
            </NuxtLink>
          </p>
        </nav>
      </div>

      <div class="header__top-right">
        <nav
          v-if="socialMediaLinks && socialMediaLinks.length > 0"
          class="header__top-right-nav"
        >
          <NuxtLink
            v-for="(item, index) in socialMediaLinks"
            :key="`socialMediaLinks--${index}`"
            class="header__top-right-nav-a"
            :href="item.link"
            target="_blank"
            :title="item.text"
          >
            <i :class="`fa-brands fa-${item.fa}`" />
          </NuxtLink>
        </nav>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.header__top {
  display: block;
  background: $primary-colour;
  padding: px-to-rem(10px) 0;

  &-container {
    @extend %containerWide;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    @media only screen and (min-width: 800px) {
      flex-wrap: nowrap;
      justify-content: space-between;
    }
  }

  &-left {
    margin: 0 0 px-to-rem(5px);
    width: 100%;

    @media only screen and (min-width: 800px) {
      margin: 0;
      width: auto;
    }

    &-nav {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;

      @media only screen and (min-width: 800px) {
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
      }
    }

    &-p {
      color: $white-colour;
      margin: 0;
      font-size: px-to-rem(13px);

      & + .header__top-left-p {
        margin: px-to-rem(5px) 0 0;

        @media only screen and (min-width: 800px) {
          margin: 0 0 0 px-to-rem(10px);
        }
      }
    }

    &-span {
      font-weight: 600;
      margin-right: px-to-rem(3px);
    }

    &-link {
      color: $white-colour;

      &:hover,
      &:focus {
        color: $black-colour;
      }
    }
  }

  &-right {
    &-nav {
      &-a {
        color: $white-colour;
        margin: 0;
        font-size: px-to-rem(13px);

        &:hover,
        &:focus {
          color: $black-colour;
        }

        & + .header__top-right-nav-a {
          margin: 0 0 0 px-to-rem(10px);
        }
      }
    }
  }
}
</style>
