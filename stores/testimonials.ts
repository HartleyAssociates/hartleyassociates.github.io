export const useTestimonialsStore = defineStore('testimonialsStore', {
  state: () => ({
    testimonials: [
      {
        text: 'One lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget tortor eu metus faucibus tempus. ',
        name: 'John Doe',
        title: 'CEO, LoremCorp',
      },
      {
        text: 'Two lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget tortor eu metus faucibus tempus. Mauris volutpat eros ut consequat volutpat.',
        name: 'Jane Doe',
        title: 'CFO, Ipsum LTD',
      },
      {
        text: 'Three lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        name: 'Jaliyah McFarland',
        title: 'Statistician, Self Employed',
      },
      {
        text: 'Four lorem ipsum dolor sit amet.',
        name: 'Dane Martin',
        title: 'Electrical Engineer, Ipsum',
      },
      {
        text: 'Five lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget tortor eu metus faucibus tempus. Mauris volutpat eros ut consequat volutpat. Nulla dictum lorem ut ipsum tincidunt euismod.',
        name: 'Mila Sanders',
        title: 'Art Director, LoremLorem',
      },
      {
        text: 'Six lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget tortor eu metus faucibus tempus. Nulla dictum lorem ut ipsum tincidunt euismod.',
        name: 'Jose Barton',
        title: 'Urban Planner, PlannerPlans LTD',
      },
      {
        text: 'Mauris volutpat eros ut consequat volutpat. Nulla dictum lorem ut ipsum tincidunt euismod.',
        name: 'Danna Baker',
        title: 'Event Planner, EventsCorp',
      },
    ],
  }),
  actions: {
    randomNumber() {
      return Math.floor(Math.random() * this.testimonials.length - 1)
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
