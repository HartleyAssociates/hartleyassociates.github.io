<template>
  <footer class="footer">
    <section class="footer__top">
      <div class="footer__container">
        <div class="footer__col footer__col--meta">
          <FooterMeta />
        </div>

        <div class="footer__col footer__col--nav">
          <FooterNav />
        </div>

        <div class="footer__col footer__col--bottom footer__col-bottom">
          <p class="footer__col-bottom-copyright">&copy; {{ new Date().getFullYear() }} Hartley Associates Ltd</p>

          <p class="footer__col-bottom-liam">
            Developed by <NuxtLink to="https://www.liammills.co.uk/" target="_blank">Liam Mills</NuxtLink>
          </p>
        </div>
      </div>
    </section>

    <section class="footer__bottom">
      <div class="footer__container">
        <Blurb />
      </div>
    </section>
  </footer>
</template>

<style lang="scss">
@use 'sass:color';
.footer {
  position: relative;
  z-index: $zindex-zero;
  margin: auto 0 0;

  &__top {
    padding: px-to-rem(20px) 0;
    background: $black-colour;

    @media only screen and (min-width: 800px) {
      padding: px-to-rem(50px) 0 px-to-rem(35px);
    }
  }

  &__bottom {
    background: color.adjust($black-colour, $lightness: -3.5%);
    padding: px-to-rem(15px) 0;

    .blurb {
      @extend %ugc;
    }

    p {
      color: $white-colour;
      font-size: px-to-rem(13px);
      // margin: 0;
      text-align: justify;
      padding: 0 px-to-rem(10px);

      a {
        color: $offwhite-colour;

        &:hover,
        &:focus {
          color: $white-colour;
        }
      }
    }
  }

  &__container {
    @extend %containerDefault;
    padding: 0 px-to-rem(5px);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
  }

  &__col {
    width: 100%;
    padding: 0 px-to-rem(10px);

    &--meta {
      @media only screen and (min-width: 800px) and (max-width: 1023px) {
        width: 40%;
      }

      @media only screen and (min-width: 1024px) {
        width: 33.333%;
      }
    }

    &--nav {
      padding: 0;
      margin-top: px-to-rem(20px);

      @media only screen and (min-width: 800px) {
        margin-top: 0;
      }

      @media only screen and (min-width: 800px) and (max-width: 1023px) {
        width: 60%;
      }

      @media only screen and (min-width: 1024px) {
        width: 66.667%;
      }
    }

    &--bottom {
      margin-top: px-to-rem(20px);

      @media only screen and (min-width: 800px) {
        margin-top: px-to-rem(40px);
      }
    }
  }

  &__col-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media only screen and (max-width: 389px) {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
    }

    &-copyright,
    &-liam {
      color: $white-colour;
      font-size: px-to-rem(13px);
      margin: 0;

      a {
        color: $white-colour;

        &:hover,
        &:focus {
          color: $offwhite-colour;
        }
      }
    }

    &-liam {
      @media only screen and (max-width: 389px) {
        margin-top: px-to-rem(5px);
      }
    }
  }
}
</style>
