<script setup lang="ts">
const { title, description, cards } = defineProps({
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
    cards: {
        type: Array as PropType<IconCardType[]>,
        default() {
            return []
        },
    },
})
</script>

<template>
    <SectionComponent class="icon-card-grid">
        <div class="icon-card-grid__container">
            <div v-if="title.length > 0 || description.length > 0" class="icon-card-grid__text">
                <h2 v-if="title.length > 0" class="icon-card-grid__title" v-html="title" />

                <p v-if="description.length > 0" class="icon-card-grid__description">
                    {{ description }}
                </p>
            </div>

            <div v-if="cards.length > 0" class="icon-card-grid__cards">
                <div v-for="(item, index) in cards" :key="index" class="icon-card-grid__col">
                    <IconCardElement v-bind="item" />
                </div>
            </div>
        </div>
    </SectionComponent>
</template>

<style lang="scss">
@use 'sass:math';
.icon-card-grid {
    &__container {
        @extend %containerDefault;
    }

    &__text {
        @extend %ugc;
        text-align: center;
    }

    &__title {
        @media only screen and (max-width: 799px) {
            font-size: px-to-rem(20px);
        }

        i {
            color: $primary-colour;
        }
    }

    //   &__description { }

    &__cards {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: stretch;
        grid-column-gap: px-to-rem(50px);
        grid-row-gap: px-to-rem(20px);
        margin-top: px-to-rem(20px);

        @media only screen and (min-width: 800px) {
            margin-top: px-to-rem(50px);
        }
    }

    &__col {
        flex: 1 0 100%;

        @media only screen and (min-width: 600px) {
            flex: 1 0 calc(50% - #{px-to-rem(math.div(100px, 2))});
        }

        @media only screen and (min-width: 1024px) {
            flex: 1 0 calc(33.333% - #{px-to-rem(math.div(100px, 3))});
        }
    }
}
</style>
