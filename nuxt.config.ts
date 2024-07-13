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
      meta: [
        { name: 'robots', content: 'noindex, nofollow' },
        { name: 'keywords', content: 'Finance, Mortgages, Buy to lets, Insurance, poor credit, investing, retirement' },
      ],
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
      type: 'LocalBusiness',
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
        width: 1500,
        height: 287,
      },
      image: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/hartley-associates-services.jpg`,
        width: 1200,
        height: 630,
      },
      sameAs: [
        'https://find-and-update.company-information.service.gov.uk/company/11632011',
        'https://uk.linkedin.com/company/hartleyassociates',
        'https://www.facebook.com/HartleyAssociatesinfo',
      ],
      address: {
        streetAddress: 'Unit G3 Ash House Business Centre, Ash Road, Longfield, Kent DA3 8JD, GB',
        addressLocality: 'Lomgfield',
        addressRegion: 'Kent',
        postalCode: 'DA3 8JD',
        addressCountry: 'GB',
      },
      geo: {
        '@type': 'geo',
        latitude: '51.3663183',
        longitude: '0.3013141',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+44 7468 962855',
        availableLanguage: [
          'English',
        ],
        contactType: 'enquiries',
        email: 'enquires@hartleyassociates.info',
      },
      taxID: '29898 26287',
      openingHours: 'Mo 09:00-17:00 Tu 09:00-17:00 We 09:00-17:00 Th 09:00-17:00 Fr 09:00-17:00',
      telephone: '+44 7468 962855',
      email: 'enquires@hartleyassociates.info',
      currenciesAccepted: 'GBP',
      paymentAccepted: 'Cash, Credit Card, Cheque',
      areaServed: 'Longfield, Gravesend, Dartford, Darenth, Greenhithe, Swanley, Sevenoaks, Tonbridge, Bromley',
      foundingDate: '01/11/2022',
      keywords: 'Finance, Mortgages, Buy to lets, Insurance, poor credit, investing, retirement',
      founder: [
        {
          '@type': 'Person',
          givenName: 'Oliver',
          familyName: 'Morgan',
          honorificSuffix: 'DipFA Cert CII (MP) ER1',
          image: `${SITE_URL}/images/ollie.jpg`,
          sameAs: [
            'https://www.linkedin.com/in/oliver-morgan-bb5b611a7/',
          ],
          jobTitle: {
            '@type': 'DefinedTerm',
            name: 'Financial Planner',
            sameAs: [
              'https://resources.workable.com/financial-planner-job-description',
              'https://nationalcareers.service.gov.uk/job-profiles/financial-adviser',
            ],
          },
        },
        {
          '@type': 'Person',
          givenName: 'Howard',
          familyName: 'Morgan',
          honorificSuffix: 'DipFFS Cert CII (MP)',
          image: `https://placehold.co/400x500`,
          sameAs: [
            'https://www.linkedin.com/in/howard-morgan-887611319/',
          ],
          jobTitle: {
            '@type': 'DefinedTerm',
            name: 'Financial Planner',
            sameAs: [
              'https://resources.workable.com/financial-planner-job-description',
              'https://nationalcareers.service.gov.uk/job-profiles/financial-adviser',
            ],
          },
        },
      ],
      employee: [
        {
          '@type': 'Person',
          givenName: 'Jason',
          familyName: 'Summerfield',
          honorificSuffix: 'DipFA',
          image: `${SITE_URL}/images/jason.jpg`,
          sameAs: [
            'https://www.linkedin.com/in/jason-summerfield-24254720/',
            'https://octofp.com/jason-summerfield/',
          ],
          jobTitle: {
            '@type': 'DefinedTerm',
            name: 'Director of Octo Financial Planning',
            alternateName: 'Financial Planner',
            sameAs: [
              'https://resources.workable.com/financial-planner-job-description',
              'https://nationalcareers.service.gov.uk/job-profiles/financial-adviser',
            ],
          },
        },
      ],
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
