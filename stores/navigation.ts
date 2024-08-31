export const useNavigationStore = defineStore('navigationStore', {
  state: () => ({
    mainmenuOpen: false,
    mainmenuLinks: [
      {
        text: 'Home',
        href: '/',
        children: [],
        isExternal: false,
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
            isExternal: false,
          },
          {
            text: 'Our Team',
            href: '/about-us/our-team',
            children: [],
            isExternal: false,
          },
          {
            text: 'Our Network',
            href: '/about-us/our-network',
            children: [],
            isExternal: false,
          },
          {
            text: 'Testimonials',
            href: '/about-us/testimonials',
            children: [],
            isExternal: false,
          },
          {
            text: 'Privacy & Cookie Policy',
            href: '/about-us/privacy-cookie-policy',
            children: [],
            isExternal: false,
          },
          {
            text: 'Best Execution Policy',
            href: '/documents/Best-Execution-Policy.pdf',
            children: [],
            isExternal: true,
          },
          {
            text: 'Client Classification',
            href: '/documents/Client-Classification.pdf',
            children: [],
            isExternal: true,
          },
          {
            text: 'Conflicts Of Interest Policy',
            href: '/documents/Conflicts-Of-Interest-Policy.pdf',
            children: [],
            isExternal: true,
          },
          {
            text: 'Your Guide To Making A Complaint',
            href: '/documents/Your-Guide-To-Making-A-Complaint.pdf',
            children: [],
            isExternal: true,
          },
        ],
        isExternal: false,
      },
      {
        text: 'Investments',
        href: '/investments',
        children: [
          {
            text: 'Planning For The Future',
            href: '/investments',
            hash: '#planning-for-the-future',
            children: [],
            isExternal: false,
          },
          {
            text: 'Your ISA',
            href: '/investments',
            hash: '#your-isa',
            children: [],
            isExternal: false,
          },
        ],
        isExternal: false,
      },
      {
        text: 'Pension',
        href: '/pension',
        children: [
          {
            text: 'Planning for retirement',
            href: '/pension',
            hash: '#planning-for-retirement',
            children: [],
            isExternal: false,
          },
        ],
        isExternal: false,
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
            isExternal: false,
          },
          {
            text: 'Buy To Let Mortgages',
            href: '/mortgages',
            hash: '#buy-to-let-mortgages',
            children: [],
            isExternal: false,
          },
          {
            text: 'Mortgage Checklist',
            href: '/mortgages',
            hash: '#mortgage-checklist',
            children: [],
            isExternal: false,
          },
        ],
        isExternal: false,
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
            isExternal: false,
          },
          {
            text: 'Life Assurance',
            href: '/protection',
            hash: '#life-assurance',
            children: [],
            isExternal: false,
          },
          {
            text: 'Critical Illness',
            href: '/protection',
            hash: '#critical-illness',
            children: [],
            isExternal: false,
          },
          {
            text: 'Income Protection',
            href: '/protection',
            hash: '#income-protection',
            children: [],
            isExternal: false,
          },
          {
            text: 'Business Protection',
            href: '/protection',
            hash: '#business-protection',
            children: [],
            isExternal: false,
          },
          {
            text: 'Accident and Sickness Insurance',
            href: '/protection',
            hash: '#accident-and-sickness-insurance',
            children: [],
            isExternal: false,
          },
        ],
        isExternal: false,
      },
      {
        text: 'Contact Us',
        href: '/contact-us',
        children: [],
        isExternal: false,
      },
    ],
  }),
  actions: {
    toggleMainmenuOpen() {
      this.mainmenuOpen = !this.mainmenuOpen
    },
  },
})
