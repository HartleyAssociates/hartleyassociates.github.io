<template>
  <form
    id="form1"
    class="contact-form"
    action="https://public.herotofu.com/v1/52025f50-4124-11ef-b917-afc6b84c2283"
    method="post"
    accept-charset="UTF-8"
  >
    <div class="contact-form__row">
      <label for="name" class="contact-form__label">Your Name</label>

      <input id="name" name="Name" type="text" required class="contact-form__input" placeholder="Your Name" />
    </div>

    <div class="contact-form__row">
      <label for="email" class="contact-form__label">Your Email</label>

      <input id="email" name="Email" type="email" required class="contact-form__input" placeholder="Your Email" />
    </div>

    <div class="contact-form__row">
      <label for="message" class="contact-form__label">Your Message</label>

      <textarea
        id="message"
        name="message"
        required
        class="contact-form__textarea"
        placeholder="Your Message"
      ></textarea>
    </div>

    <div class="contact-form__row contact-form__row--hidden" aria-hidden="true">
      <input type="text" name="_gotcha" tabindex="-1" autocomplete="off" class="contact-form__input" />
    </div>

    <div class="contact-form__row contact-form__row--button">
      <button type="submit" form="form1" value="Submit" class="contact-form__button">Submit</button>
    </div>
  </form>
</template>

<style lang="scss">
.contact-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  height: 100%;
  padding: px-to-rem(55px) px-to-rem(35px);

  @media only screen and (max-width: 799px) {
    height: auto;
    padding: px-to-rem(20px);
  }

  &__row {
    &--hidden {
      text-indent: -99999px;
      white-space: nowrap;
      overflow: hidden;
      position: absolute;
    }

    & + .contact-form__row {
      margin-top: px-to-rem(20px);

      &--hidden {
        margin: 0;
      }
    }
  }

  &__label {
    position: absolute;
    width: px-to-rem(1px);
    height: px-to-rem(1px);
    padding: 0;
    margin: px-to-rem(-1px);
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }

  &__input,
  &__textarea {
    padding: px-to-rem(13px) px-to-rem(18px);
    width: 100%;
    border: 0;
    max-width: 100%;
    box-shadow: none;
    border-radius: 0;
    position: relative;

    &:focus {
      outline: $secondary-colour px-to-rem(2px) inset;
      outline-offset: px-to-rem(-2px);
    }
  }

  &__textarea {
    resize: none;
    height: 140px;
  }

  &__button {
    @extend %primaryButton;
    display: block;
    width: 100%;
  }
}
</style>
