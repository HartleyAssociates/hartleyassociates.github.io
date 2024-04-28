// https://nuxt.com/docs/api/configuration/nuxt-config

const SITE_NAME = 'Hartley Associates'
const SITE_URL = 'https://hartleyassociates.info'

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/scss/main.scss'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  modules: [
    "@nuxtjs/seo",
    "@nuxt/image",
    "@nuxt/fonts"
  ],
  site: {
    url: SITE_URL,
    name: SITE_NAME,
    description: 'Welcome Hartley Associates',
    defaultLocale: 'en',
  },
  seo: {
    redirectToCanonicalSiteUrl: true
  },
  ogImage: {
    enabled: false
  },
  sitemap: {
    enabled: true
  },
  robots: {
    enabled: true,
    sitemap: '/sitemap.xml',
    credits: false
  },
  seoExperiments: {
    enabled: true
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
        'https://uk.linkedin.com/company/hartleyassociates'
      ],
      taxID: 'ksdjbfksdjbf'
    }
  },
  linkChecker: {
    enabled: true,
    failOnError: true,
    report: {
      html: true,
      markdown: true,
    }
  },
  fonts: {
    families: [
      { name: 'Rufina', provider: 'google' },
    ],
  }
})