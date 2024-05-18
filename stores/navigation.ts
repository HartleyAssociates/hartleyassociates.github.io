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
            href: '/about-us',
            hash: '#why-choose-us',
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
            href: '/investments',
            hash: '#your-isa',
            children: [],
          },
          {
            text: 'Planning For The Future',
            href: '/investments',
            hash: '#planning-for-the-future',
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
            href: '/pension',
            hesh: 'planning-for-retirement',
            children: [],
          },
          {
            text: 'Estate Planning',
            href: '/pension',
            hesh: 'state-planning',
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
            href: '/mortgages',
            hash: '#residential-mortgages',
            children: [],
          },
          {
            text: 'Buy To Let Mortgages',
            href: '/mortgages',
            hash: '#buy-to-let-mortgages',
            children: [],
          },
          {
            text: 'Mortgage Checklist',
            href: '/mortgages',
            hash: '#mortgage-checklist',
            children: [],
          },
        ],
      },
      {
        text: 'Protection',
        href: '/protection',
        children: [
          {
            text: 'Decreasing Term Assurance',
            href: '/protection',
            hash: '#decreasing-term-assurance',
            children: [],
          },
          {
            text: 'Life Assurance',
            href: '/protection',
            hash: '#life-assurance',
            children: [],
          },
          {
            text: 'Critical Illness',
            href: '/protection',
            hash: '#critical-illness',
            children: [],
          },
          {
            text: 'Income Protection',
            href: '/protection',
            hash: '#income-protection',
            children: [],
          },
          {
            text: 'Business Protection',
            href: '/protection',
            hash: '#business-protection',
            children: [],
          },
          {
            text: 'Accident and Sickness Insurance',
            href: '/protection',
            hash: '#accident-and-sickness-insurance',
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
