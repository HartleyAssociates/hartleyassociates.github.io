<script setup lang="ts">
const { idProp } = defineProps({
  idProp: {
    type: String,
    default() {
      return ''
    },
  },
})

const socialMediaLinks = useSocialMediaLinks()
const contactDetails = useContactDetails()
</script>

<template>
  <SectionComponent class="contact-section" :id-prop="idProp">
    <div class="contact-section__container">
      <div class="contact-section__col contact-section__col--2 contact-section__col--mob-order-2">
        <div class="contact-section__contact-form" />
      </div>

      <div class="contact-section__col contact-section__col--2 contact-section__col--mob-order-1">
        <div class="contact-section__content">
          <h2 class="contact-section__content-title">
            Get in Touch With Us And<br />
            We’ll <i>Help You!</i>
          </h2>

          <p class="contact-section__content-p">
            We are a trusted analytical partner to the financial services, gaming, airlines and loyalty industries and
            are constantly formulating analytic solutions for large banks, credit unions, casinos and travel companies
            throughout the globe.
          </p>

          <ul class="contact-section__content-ul">
            <li
              v-if="contactDetails?.multiLineAddress && contactDetails.multiLineAddress.length > 0"
              class="contact-section__content-li"
            >
              <i
                class="fa-duotone fa-house"
                style="
                  --fa-primary-color: #4d7e3e;
                  --fa-secondary-color: #31c48d;
                  --fa-primary-opacity: 1;
                  --fa-secondary-opacity: 1;
                "
              />

              <p v-html="contactDetails.multiLineAddress" />
            </li>

            <template v-if="contactDetails?.linkList && contactDetails.linkList.length > 0">
              <li
                v-for="(item, index) in contactDetails.linkList"
                :key="`contactDetails--${index}`"
                class="contact-section__content-li"
              >
                <i
                  :class="`fa-duotone fa-${item.type === 'email' ? 'envelope' : item.type}`"
                  style="
                    --fa-primary-color: #4d7e3e;
                    --fa-secondary-color: #31c48d;
                    --fa-primary-opacity: 1;
                    --fa-secondary-opacity: 1;
                  "
                />

                <NuxtLink class="contact-section__content-li-link" :to="item.link">
                  {{ item.altText }}
                </NuxtLink>
              </li>
            </template>
          </ul>

          <nav v-if="socialMediaLinks && socialMediaLinks.length > 0" class="contact-section__content-nav">
            <NuxtLink
              v-for="(item, index) in socialMediaLinks"
              :key="`socialMediaLinks--${index}`"
              class="contact-section__content-nav-a"
              :href="item.link"
              target="_blank"
              :title="item.text"
            >
              <i :class="`fa-brands fa-${item.fa}`" />
            </NuxtLink>
          </nav>
        </div>
      </div>
    </div>
  </SectionComponent>
</template>

<style lang="scss">
.contact-section {
  @include columnsMixin;

  &__container {
    align-items: center;
  }

  &__contact-form {
    box-shadow: 0 px-to-rem(10px) px-to-rem(50px) 0 rgba($black-colour, 0.25);
    background-color: $primary-colour;
    width: 100%;
    height: px-to-rem(500px);
    max-width: px-to-rem(400px);
    margin: 0 auto;
  }

  &__content {
    @extend %ugc;

    &-title {
      margin-bottom: px-to-rem(30px);

      i {
        color: $primary-colour;
      }

      br {
        @media only screen and (max-width: 850px) {
          display: none;
        }
      }
    }

    &-p {
      display: block;
      margin-bottom: px-to-rem(20px);
    }

    &-ul {
      margin: 0 0 px-to-rem(20px);
      padding: 0;
      list-style: none;
    }

    &-li {
      position: relative;
      padding-left: px-to-rem(40px);
      margin: 0;

      & + .contact-section__content-li {
        margin-top: px-to-rem(10px);
      }

      i {
        position: absolute;
        left: 0;
        top: px-to-rem(1px);
        font-size: px-to-rem(20px);
      }
    }

    &-nav {
      &-a {
        margin: 0;
        font-size: px-to-rem(20px);

        & + .contact-section__content-nav-a {
          margin: 0 0 0 px-to-rem(15px);
        }
      }
    }
  }
}
</style>
