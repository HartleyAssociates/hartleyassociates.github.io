<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
    error: {
        type: Object as () => NuxtError,
        default() {
            return {}
        },
    },
})

const handleError = () => clearError({ redirect: '/' })

useHead({
    bodyAttrs: {
        class: 'error-page-body',
    },
})
</script>

<template>
    <div class="body-container body-container--error">
        <article class="error-page">
            <section class="error-page__container">
                <h1 class="error-page__title">{{ props?.error?.statusCode }} Error!</h1>

                <p class="error-page__text">{{ props?.error?.statusMessage }}</p>

                <button class="error-page__button" @click="handleError">Go back to the homepage</button>
            </section>
        </article>
    </div>
</template>

<style lang="scss">
.error-page-body {
    .body-container {
        padding: 0;

        &:not(.body-container--error) {
            display: none;
            visibility: hidden;
        }
    }
}

.error-page {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: $primary-colour;
    height: 100%;
    min-height: px-to-rem(213px);

    &__container {
        text-align: center;
        padding: px-to-rem(20px);
        max-width: px-to-rem(480px);
    }

    &__title {
        margin: 0;
        color: $white-colour;
    }

    &__text {
        margin: px-to-rem(10px) 0 0;
        color: $white-colour;
    }

    &__button {
        margin: px-to-rem(30px) 0 0;
        @extend %secondaryButton;
    }
}
</style>
