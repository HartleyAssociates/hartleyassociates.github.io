<template>
  <Container>
    <Hero title="About Us" />

    <LogoText>
      <p>
        Hartley Associates is a family run financial advice and planning firm. We have over 50 years of experience under
        one roof. From investment and retirement planning to helping a young couple get that first step onto the housing
        ladder. We pride ourselves on our client centric approach and successful results carefully tailored to the
        clients needs.
      </p>
    </LogoText>

    <CardGrid
      :cards="[
        {
          title: '50 Years of experience',
          description: 'a vast knowledge base at you disposal',
          linkText: 'Who works for us',
          link: '/about-us/our-team',
        },
        {
          title: '127 Valued Clients',
          description: 'have access our services in the last 2 years',
          linkText: 'Find out who they are',
          link: '/about-us#why-choose-us',
        },
        {
          title: '35+ Advisers in wider network',
          description: 'Specialist services on demand',
          linkText: 'Our Network',
          link: '/about-us#why-choose-us',
        },
      ]"
    />

    <IconCardGrid
      title="How we work"
      :cards="[
        {
          icon: 'arrow-right',
          title: 'Consultation',
          description: 'Pellentesque eleifend libero ut tempus bibendum. Phasellus nunc purus, consequat.',
        },
        {
          icon: 'arrow-right',
          title: 'Advice',
          description: 'Pellentesque eleifend libero ut tempus bibendum. Phasellus nunc purus, consequat.',
        },
        {
          icon: 'arrow-right',
          title: 'Implementation',
          description: 'Pellentesque eleifend libero ut tempus bibendum. Phasellus nunc purus, consequat.',
        },
        {
          icon: 'arrow-right',
          title: 'Ongoing Service',
          description: 'Pellentesque eleifend libero ut tempus bibendum. Phasellus nunc purus, consequat.',
        },
      ]"
      :row-size="2"
    />

    <AccreditationsIcons />
  </Container>
</template>
