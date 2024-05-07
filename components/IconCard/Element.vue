<script setup lang="ts">
const { icon, title, description } = defineProps({
    icon: {
        type: String,
        default() {
            return 'arrow-right'
        },
    },
    title: {
        type: String,
        default() {
            return ''
        },
    },
    description: {
        type: String,
        default() {
            return ''
        },
    },
})
</script>

<template>
    <div class="icon-card">
        <div class="icon-card__icon">
            <i :class="`fa-solid fa-${icon}`" />
        </div>

        <div class="icon-card__text">
            <p v-if="title.length > 0" class="icon-card__title">{{ title }}</p>

            <p v-if="description.length > 0" class="icon-card__description">
                {{ description }}
            </p>
        </div>
    </div>
</template>

<style lang="scss">
.icon-card {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    gap: px-to-rem(10px);

    &__icon {
        width: px-to-rem(50px);

        i {
            font-size: px-to-rem(40px);
            line-height: 1;
            color: $secondary-colour;
        }
    }

    &__text {
        @extend %ugc;
        flex: 1 0 calc(100% - #{px-to-rem(50px + 10px)});
    }

    &__title {
        @extend %heading;
    }

    //   &__description { }
}
</style>
