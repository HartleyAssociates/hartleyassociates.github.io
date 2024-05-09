// https://nuxt.com/docs/api/configuration/nuxt-config

const SITE_NAME = 'Hartley Associates'
const SITE_URL = 'https://hartleyassociates.info'

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/scss/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/include.scss" as *;',
        },
      },
    },
  },
  app: {
    // baseURL: '/',
    // buildAssetsDir: 'assets',
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      // TODO: remove when going live
      meta: [{ name: 'robots', content: 'noindex, nofollow'}],
      script: [{ src: 'https://kit.fontawesome.com/f1d1dadb8c.js', crosscrossorigin: 'anonymous' }],
    },
  },
  modules: ['@nuxt/eslint', '@nuxtjs/seo', '@nuxt/image', '@nuxt/fonts', '@zadigetvoltaire/nuxt-gtm', '@pinia/nuxt'],
  site: {
    url: SITE_URL,
    name: SITE_NAME,
    description: 'Welcome Hartley Associates',
    defaultLocale: 'en',
  },
  seo: {
    redirectToCanonicalSiteUrl: true,
  },
  ogImage: {
    enabled: false,
  },
  sitemap: {
    enabled: true,
  },
  robots: {
    enabled: true,
    sitemap: '/sitemap.xml',
    credits: true,
    // TODO: remove on go live
    disallow: ['/'],
  },
  seoExperiments: {
    enabled: true,
  },
  schemaOrg: {
    enabled: true,
    identity: {
      type: 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      sameAs: [
        'https://find-and-update.company-information.service.gov.uk/company/11632011',
        'https://uk.linkedin.com/company/hartleyassociates',
      ],
      taxID: 'ksdjbfksdjbf',
    },
  },
  linkChecker: {
    enabled: true,
    failOnError: true,
    report: {
      html: true,
      markdown: true,
    },
  },
  fonts: {
    families: [{ name: 'Rufina', provider: 'google' }],
  },
  gtm: {
    id: 'GTM-KWMJ6G57',
    defer: true,
    compatibility: true,
  },
  alias: {
    pinia: '/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs',
  },
  eslint: {},
})
