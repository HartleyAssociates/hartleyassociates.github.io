<script setup lang="ts">
const { idProp, submitted } = defineProps({
  idProp: {
    type: String,
    default() {
      return ''
    },
  },
  submitted: {
    type: Boolean,
    default() {
      return false
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
        <div class="contact-section__contact-form">
          <ContactForm v-if="!submitted" />

          <div v-else class="contact-section__contact-form-text">
            <h2 class="contact-section__content-title">Thank You!</h2>

            <p class="contact-section__content-p">We've received your submission.</p>

            <p class="contact-section__content-p">We will get back to you as soon as possible.</p>
          </div>
        </div>
      </div>

      <div class="contact-section__col contact-section__col--2 contact-section__col--mob-order-1">
        <div class="contact-section__content">
          <p class="contact-section__content-p">
            At Hartley Associates, we are driven by you, our clients. We believe in delivering a personalised and
            bespoke approach shaped around your specific needs.
          </p>

          <p class="contact-section__content-p">
            We value face-to-face communication and so, whenever we can, we will do our best to meet our clients in
            person. Of course, we recognise that this isn't always possible, in which case, a virtual meeting or phone
            call can be arranged.
          </p>

          <p class="contact-section__content-p">Whatever your financial query, contact us today.</p>

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
    background: $black-colour;
    width: 100%;
    min-height: px-to-rem(500px);
    max-width: px-to-rem(400px);
    margin: 0 auto;

    @media only screen and (max-width: 799px) {
      min-height: 0;
    }
  }

  &__contact-form-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    height: 100%;
    padding: px-to-rem(55px) px-to-rem(35px);
    @extend %ugc;

    @media only screen and (max-width: 799px) {
      padding: px-to-rem(20px);
    }
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
