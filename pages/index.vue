<template>
  <Container>
    <Hero
      type="home"
      img="/images/MISC--extra-pic.jpg"
      alt="Families union jack wellington boots in a row"
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
          image: '/images/MISC--self-employed.jpg',
          alt: 'Person on a computer in an office',
          title: 'Self Employed Mortgages',
          description: 'Find a mortgage provider that suits',
          linkText: 'Know more',
          link: '/mortgages',
        },
        {
          image: '/images/MISC--planning-retirement.jpg',
          alt: 'Jar of coins with a plant growing in it',
          title: 'Retirement planning',
          description: 'Worried about the future',
          linkText: 'What we can offer',
          link: '/pension',
        },
        {
          image: '/images/MISC--poor-credit-history.jpg',
          alt: 'House, piggy bank, magnifying glass sitting on blueprints',
          title: 'Poor Credit History',
          description: 'Past debts making borrowing difficult',
          linkText: 'How we can help',
          link: '/about-us#why-choose-us',
        },
      ]"
    />

    <IconCardGrid
      title="Bespoke Financial planning <br/><i>to suit you</i>"
      :cards="[
        {
          icon: 'house',
          title: 'First Time Buyers',
          description: 'Guidance for getting onto the housing ladder.',
        },
        {
          icon: 'truck-fast',
          title: 'Moving Home',
          description: 'Making a fresh start or moving to your forever home.',
        },
        {
          icon: 'piggy-bank',
          title: 'Saving for the future',
          description: 'Let us help you achieve your long term goals.',
        },
        {
          icon: 'arrow-right',
          title: 'Transferring your pension',
          description: 'Making your pension work you in a ever changing landscape.',
        },
        {
          icon: 'money-check-pen',
          title: 'Releasing money from home',
          description: 'Access your equity present in your home.',
        },
        {
          icon: 'shield-halved',
          title: 'Protection your family',
          description: 'Advising on suitable and cost effective protection solutions for you and your family.',
        },
        {
          icon: 'chart-line-up',
          title: 'Grow your portfolio',
          description: ' Helping you getting the most out of your money whether it be property or personal savings .',
        },
      ]"
    />

    <ImageText
      title="How We Help Businesses <i>Keep Running and Healthy.</i>"
      description="Companies seem to dislike the term ‘turnaround consulting’ because it represents failure. The truth is that turnaround consulting represents success at realizing the company is going in the wrong direction."
      link="/contact-us"
      link-text="Get a free quote"
    />

    <TestimonialsListing type="homepage" />
  </Container>
</template>
