// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/scss/main.scss'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  modules: [
    "@nuxtjs/seo",
    "@nuxt/image",
    "nuxt-jsonld",
    "@nuxtjs/color-mode",
    "@nuxt/fonts"
  ],
  site: {
    url: 'https://hartleyassociates.info',
    name: 'Hartley Associates',
    description: 'Welcome Hartley Associates',
    defaultLocale: 'en',
  },
  seo: {
    redirectToCanonicalSiteUrl: true
  },
  ogImage: {
    enabled: true
  },
  sitemap: {
    enabled: true
  },
  robots: {
    enabled: true
  },
  seoExperiments: {
    enabled: true
  },
  schemaOrg: {
    enabled: true
  },
  linkChecker: {
    enabled: true
  },
  fonts: {
    families: [
      { name: 'Rufina', provider: 'google' },
    ],
  }
})