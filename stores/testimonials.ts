export const useTestimonialsStore = defineStore('testimonialsStore', {
  state: () => ({
    testimonials: [
      {
        text: `I have been a client of Howard and Oliver for more than 10 years now and my loyalty is down to various factors. The flexibility and availability of both Howard and Oliver suits my situation. I’m able to get information on products and rates in a very quick time allowing me to make critical decisions. Ability to minimise the amount of aggravation I have to endure and access various lender’s products. I would highly recommend them as a partner for your financial services needs.`,
        name: 'Nick Brown',
        title: 'Fresh Produce Wholesaler, T.H. Brown & Son',
        link: 'https://www.linkedin.com/in/nick-brown-63723016/',
        location: 'Gravesend, Kent',
        date: '20/06/2024',
      },
      {
        text: 'I have been a client of Howard and Oliver for almost 10 years now, they are both extremely professional and have always filled me with confidence. They have an in-depth understanding of the mortgage application process and have ensured a great result whenever I have worked with them. I would highly recommend them both for any financial assistance.',
        name: 'James Frost',
        title: 'Senior Contract Manager, Cool Dynamics Facilities Ltd',
        link: 'https://www.linkedin.com/in/james-frost-7117b3105/',
        location: 'Hartley, Kent',
        date: '25/07/2024',
      },
      {
        text: 'I couldn’t recommend both Oliver and Howard more. Extremely professional service from start to finish and they always offer the best advice!',
        name: 'Sean Morrison',
        title: 'Contracts Director, ECMS Ltd',
        link: 'https://www.linkedin.com/in/sean-morrison-a8943a170/',
        location: 'Hartley, Kent',
        date: '25/07/2024',
      },
      {
        text: 'In what is usually a stressful experience, Oliver was reassuring and extremely helpful. Both Oliver and Howard are always available and completely transparent. Cannot recommend them highly enough.',
        name: 'Alex Brown',
        title: 'Senior Business Analyst, TIW Group Ltd',
        link: 'https://www.linkedin.com/in/alex-brown-b85a0a75/',
        location: 'Hitchin, Hertfordshire',
        date: '26/07/2024',
      },
      {
        text: 'Great service through the entire mortgage application process where everything was made easy to understand. I would recommend them to anyone looking for a mortgage broker.',
        name: 'Joshua Carr',
        title: '',
        link: '',
        location: 'London',
        date: '01/08/2024',
      },
      {
        text: 'Excellent Service from Hartley Associates would highly recommend 5 stars. Howard and Oliver are so helpful and always happy to help.',
        name: 'Carly Frost',
        title: '',
        link: '',
        location: 'Hartley, Kent',
        date: '15/07/2024',
      },
    ],
  }),
  actions: {
    randomNumber() {
      return Math.floor(Math.random() * (this.testimonials.length - 1))
    },
    getAllTestimonials() {
      return this.testimonials
    },
    getTestimonials() {
      const randomNumberOne = this.randomNumber()
      let randomNumberTwo = this.randomNumber()

      if (randomNumberOne === randomNumberTwo) {
        randomNumberTwo = randomNumberTwo - 1 < 0 ? randomNumberTwo + 1 : randomNumberTwo - 1
      }

      return [this.testimonials[randomNumberOne], this.testimonials[randomNumberTwo]]
    },
  },
})
