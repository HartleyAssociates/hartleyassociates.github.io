export const useTestimonialsStore = defineStore('testimonialsStore', {
  state: () => ({
    testimonials: [
      {
        text: `I have been a client of Howard and Oliver for more than 10 years now and my loyalty is down to various factors. The flexibility and availability of both Howard and Oliver suits my situation. I’m able to get information on products and rates in a very quick time allowing me to make critical decisions. Ability to minimise the amount of aggravation I have to endure and access various lender’s products. I would highly recommend them as a partner for your financial services needs.`,
        name: 'Nick Brown',
        title: 'Fresh Produce Wholesaler, T.H. Brown & Son',
        link: 'https://www.linkedin.com/in/nick-brown-63723016/',
      },
      {
        text: 'I have been a client of Howard and Oliver for almost 10 years now, they are both extremely professional and have always filled me with confidence. They have an in-depth understanding of the mortgage application process and have ensured a great result whenever I have worked with them. I would highly recommend them both for any financial assistance.',
        name: 'James Frost',
        title: 'Senior Contract Manager, Cool Dynamics Facilities Ltd',
        link: 'https://www.linkedin.com/in/james-frost-7117b3105/',
      },
      {
        text: 'I couldn’t recommend both Oliver and Howard more. Extremely professional service from start to finish and they always offer the best advice!',
        name: 'Sean Morrison',
        title: 'Contracts Director, ECMS Ltd',
        link: 'https://www.linkedin.com/in/sean-morrison-a8943a170/',
      },
      {
        text: 'I have used Oliver for all my mortgage planning needs after difficulty going direct to lenders. I would absolutely recommend Oliver and will use him for my future mortgage needs.',
        name: 'Alex Brown',
        title: 'Senior Business Analyst, TIW Group Ltd',
        link: 'https://www.linkedin.com/in/alex-brown-b85a0a75/',
      },
      {
        text: 'Great service through the entire mortgage application process where everything was made easy to understand. I would recommend them to anyone looking for a mortgage broker.',
        name: 'Joshua Carr',
        title: '',
        link: '',
      },
      {
        text: 'Excellent Service from Hartley Associates would highly recommend 5 stars. Howard and Oliver are so helpful and always happy to help.',
        name: 'Carly Frost',
        title: '',
        link: '',
      },
    ],
  }),
  actions: {
    randomNumber() {
      return Math.floor(Math.random() * this.testimonials.length - 1)
    },
    getAllTestimonials() {
      return this.testimonials
    },
    getTestimonials() {
      const randomNumberOne = this.randomNumber()
      let randomNumberTwo = this.randomNumber()

      if (randomNumberOne === randomNumberTwo) {
        randomNumberTwo = randomNumberTwo - 1
      }

      return [this.testimonials[randomNumberOne], this.testimonials[randomNumberTwo]]
    },
  },
})
