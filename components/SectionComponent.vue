<template>
    <section class="section">
        <slot />
    </section>
</template>

<style lang="scss">
.section {
    position: relative;
    z-index: $zindex-zero;
    padding: px-to-rem($section-padding--mobile) 0;

    @media only screen and (min-width: 800px) {
        padding: px-to-rem($section-padding--tablet) 0;
    }

    @media only screen and (min-width: 1024px) {
        padding: px-to-rem($section-padding--desktop) 0;
    }
}
</style>
