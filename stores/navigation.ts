export const useNavigationStore = defineStore('navigationStore', {
  state: () => ({
    mainmenuOpen: false,
    mainmenuLinks: [
      {
        text: 'Home',
        href: '/',
        children: [],
      },
      {
        text: 'About Us',
        href: '/about-us',
        children: [
          {
            text: 'Why Choose Us',
            href: '/about-us#why-choose-us',
            children: [],
          },
          {
            text: 'Our Mission',
            href: '/about-us#our-mission',
            children: [],
          },
          {
            text: 'Our Team',
            href: '/about-us/our-team',
            children: [],
          },
          {
            text: 'Our Network',
            href: '/about-us/our-network',
            children: [],
          },
          {
            text: 'Testimonials',
            href: '/about-us/testimonials',
            children: [],
          },
          {
            text: 'Privacy Policy',
            href: '/about-us/privacy-policy',
            children: [],
          },
          {
            text: 'Cookie Policy',
            href: '/about-us/cookie-policy',
            children: [],
          },
        ],
      },
      {
        text: 'Investments',
        href: '/investments',
        children: [
          {
            text: 'Your ISA',
            href: '/investments#your-isa',
            children: [],
          },
          {
            text: 'Planning For The Future',
            href: '/investments#planning-for-the-future',
            children: [],
          },
        ],
      },
      {
        text: 'Pension',
        href: '/pension',
        children: [
          {
            text: 'Planning for retirement',
            href: '/pension#lanning-for-retirement',
            children: [],
          },
          {
            text: 'Estate Planning',
            href: '/pension#state-planning',
            children: [],
          },
        ],
      },
      {
        text: 'Mortgages',
        href: '/mortgages',
        children: [
          {
            text: 'Residential Mortgages',
            href: '/mortgages#residential-mortgages',
            children: [],
          },
          {
            text: 'Buy To Let Mortgages',
            href: '/mortgages#buy-to-let-mortgages',
            children: [],
          },
          {
            text: 'Specialist Mortgages',
            href: '/mortgages#specialist-mortgages',
            children: [],
          },
        ],
      },
      {
        text: 'Protection',
        href: '/protection',
        children: [
          {
            text: 'Life Assurance',
            href: '/protection#life-assurance',
            children: [],
          },
          {
            text: 'Critical Illness',
            href: '/protection#critical-illness',
            children: [],
          },
          {
            text: 'Income Protection',
            href: '/protection#income-protection',
            children: [],
          },
          {
            text: 'Business Protection',
            href: '/protection#business-protection',
            children: [],
          },
        ],
      },
      {
        text: 'Contact Us',
        href: '/contact-us',
        children: [],
      },
    ],
  }),
  actions: {
    toggleMainmenuOpen() {
      this.mainmenuOpen = !this.mainmenuOpen
    },
  },
})
