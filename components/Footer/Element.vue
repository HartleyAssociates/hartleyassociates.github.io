<template>
    <footer class="footer">
        <div class="footer__container">
            <div class="footer__col footer__col--meta">
                <FooterMeta />
            </div>

            <div class="footer__col footer__col--nav">
                <FooterNav />
            </div>
        </div>
    </footer>
</template>

<style lang="scss">
.footer {
    position: relative;
    z-index: $zindex-zero;
    padding: px-to-rem(20px) 0 px-to-rem(40px);
    background: $black-colour;
    margin: auto 0 0;

    @media only screen and (min-width: 800px) {
        padding: px-to-rem(50px) 0 px-to-rem(75px);
    }

    &__container {
        @extend %containerDefault;
        padding: 0 px-to-rem(10px);
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
    }
}
</style>
