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
  </Container>
</template>
