<script setup lang="ts">
const socialMediaLinks = useSocialMediaLinks();
const contactDetails = useContactDetails();
</script>

<template>
  <section class="footer__meta">
    <NuxtLink to="/" title="Hartley Associates Logo" class="footer__meta-logo">
      <LogoMain primary="#ffffff" secondary="#ffffff77" />
    </NuxtLink>

    <p
      v-if="
        contactDetails?.singleLineAddress &&
        contactDetails.singleLineAddress.length > 0
      "
      class="footer__meta-address"
      v-html="contactDetails.singleLineAddress"
    />

    <nav
      v-if="contactDetails?.linkList && contactDetails.linkList.length > 0"
      class="footer__meta-contact"
    >
      <NuxtLink
        v-for="(item, index) in contactDetails.linkList"
        :key="`contactDetails--${index}`"
        class="footer__meta-contact-link"
        :to="item.link"
      >
        {{ item.altText }}
      </NuxtLink>
    </nav>

    <nav
      v-if="socialMediaLinks && socialMediaLinks.length > 0"
      class="footer__meta-social"
    >
      <NuxtLink
        v-for="(item, index) in socialMediaLinks"
        :key="`socialMediaLinks--${index}`"
        class="footer__meta-social-a"
        :href="item.link"
        target="_blank"
        :title="item.text"
      >
        <i :class="`fa-brands fa-${item.fa}`" />
      </NuxtLink>
    </nav>

    <p class="footer__meta-copyright">
      &copy; {{ new Date().getFullYear() }} Hartley Associates Ltd
    </p>
  </section>
</template>

<style lang="scss">
.footer__meta {
  &-logo {
    display: block;
    max-width: 305px; // 200px;
    height: auto; // 38px;

    svg {
      display: block;
      width: 100%;
      height: 100%;
    }
  }

  &-address,
  &-contact-link,
  &-social-a,
  &-copyright {
    color: $white-colour;
    font-size: px-to-rem(13px);
    margin: 0;
  }

  &-contact-link,
  &-social-a {
    color: $offwhite-colour;

    &:hover,
    &:focus {
      color: $secondary-colour;
    }
  }

  &-address {
    margin: px-to-rem(20px) 0 0;
  }

  &-contact {
    flex-direction: row;
    justify-content: space-between;
    margin: px-to-rem(5px) 0 0;

    @media only screen and (min-width: 390px) {
      flex-wrap: nowrap;
    }

    &-link {
      @media only screen and (max-width: 389px) {
        display: block;
        width: 100%;
      }

      & + .footer__meta-contact-link {
        position: relative;
        z-index: $zindex-zero;
        margin: px-to-rem(5px) 0 0 0;

        @media only screen and (min-width: 390px) {
          margin: 0 0 0 px-to-rem(10px);
          padding: 0 0 0 px-to-rem(10px);
        }

        &:after {
          @media only screen and (min-width: 390px) {
            position: absolute;
            z-index: $zindex-one;
            top: 0;
            left: 0;
            display: block;
            content: "";
            height: 100%;
            width: px-to-rem(1px);
            background: $white-colour;
          }
        }
      }
    }
  }

  &-social {
    margin: px-to-rem(15px) 0 0;

    &-a {
      & + .footer__meta-social-a {
        margin: 0 0 0 px-to-rem(10px);
      }
    }
  }

  &-copyright {
    margin: px-to-rem(20px) 0 0;

    @media only screen and (min-width: 800px) {
      margin: px-to-rem(30px) 0 0;
    }
  }
}
</style>
