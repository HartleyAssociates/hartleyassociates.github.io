<template>
  <Container>
    <Hero
      type="home"
      title="Financial Planning <br/>and <i>Brokerage</i>"
      :buttons="[
        { title: 'Our Services', href: '/about-us', type: 'primary' },
        { title: 'Contact Us', href: '/contact-us', type: 'tertiary' },
      ]"
    />

    <CardGrid
      margin-top="minus"
      :cards="[
        {
          title: 'Self Employed Mortgages',
          description: 'Find a mortgage provider that suits',
          linkText: 'Know more',
          link: '/mortgages',
        },
        {
          title: 'Retirement planning',
          description: 'Worried about the future',
          linkText: 'What we can offer',
          link: '/pension',
        },
        {
          title: 'Poor Credit History',
          description: 'Past debts making borrowing difficult',
          linkText: 'How we can help',
          link: '/about-us/why-choose-us',
        },
      ]"
    />

    <IconCardGrid
      title="Bespoke Financial planning <br/><i>to suit you</i>"
      :cards="[
        {
          icon: 'arrow-right',
          title: 'Moving Home',
          description: 'Pellentesque eleifend libero ut tempus bibendum. Phasellus nunc purus, consequat.',
        },
        {
          icon: 'arrow-right',
          title: 'Saving for the future',
          description: 'Pellentesque eleifend libero ut tempus bibendum. Phasellus nunc purus, consequat.',
        },
        {
          icon: 'arrow-right',
          title: 'Transferring your pension',
          description: 'Pellentesque eleifend libero ut tempus bibendum. Phasellus nunc purus, consequat.',
        },
        {
          icon: 'arrow-right',
          title: 'Releasing money from home',
          description: 'Pellentesque eleifend libero ut tempus bibendum. Phasellus nunc purus, consequat.',
        },
        {
          icon: 'arrow-right',
          title: 'Protection your family',
          description: 'Pellentesque eleifend libero ut tempus bibendum. Phasellus nunc purus, consequat.',
        },
        {
          icon: 'arrow-right',
          title: 'Lorem ipsum dolor',
          description: 'Pellentesque eleifend libero ut tempus bibendum. Phasellus nunc purus, consequat.',
        },
      ]"
    />
  </Container>
</template>
