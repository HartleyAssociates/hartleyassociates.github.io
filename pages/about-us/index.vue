<script setup lang="ts">
useSeoMeta({
  description: 'Hartley Associates is a family run financial advice and planning firm. We have over 40 years of experience under one roof. From investment and retirement planning to helping a young couple get that first step onto the housing ladder. We pride ourselves on our client centric approach and successful results carefully tailored to the clients needs.',
})
</script>

<template>
  <Container>
    <Hero title="About Us" img="/images/about-us--banner.jpg" alt="Birdseye view of a business meeting" />

    <LogoText>
      <p>
        Hartley Associates is a family run financial advice and planning firm. We have over 40 years of experience under
        one roof. From investment and retirement planning to helping a young couple get that first step onto the housing
        ladder. We pride ourselves on our client centric approach and successful results carefully tailored to the
        clients needs.
      </p>
    </LogoText>

    <CardGrid
      id-prop="why-choose-us"
      title="Why Choose Us"
      :cards="[
        {
          image: '/images/about-us--40.jpg',
          alt: 'People in a meeting, talking over a document',
          title: '40+ Years of experience',
          description: 'a vast knowledge base at your disposal',
          linkText: 'Who works for us',
          link: '/about-us/our-team',
        },
        {
          image: '/images/about-us--127.jpg',
          alt: 'Person in a white shirt using a smartphone',
          title: '127 Valued Clients',
          description: 'have access our services in the last 2 years',
          linkText: 'Find out who they are',
          link: '/about-us/testimonials',
        },
        {
          image: '/images/about-us--network.jpg',
          alt: 'Two people in a business meeting',
          title: '35+ Advisers in wider network',
          description: 'Specialist services on demand',
          linkText: 'Our Network',
          link: '/about-us/our-network',
        },
      ]"
    />

    <IconCardGrid
      title="How we work"
      :cards="[
        {
          icon: 'briefcase',
          title: 'Consultation',
          description: 'Arrange a meeting with us with no strings attached and find out how we can help.',
        },
        {
          icon: 'comments',
          title: 'Advice',
          description:
            'After carrying out a fact find and reviewing your personal situation we can begin to form a suitable recommendation.',
        },
        {
          icon: 'list-check',
          title: 'Implementation',
          description:
            'Once the recommendation has been agreed upon we can use our expertise to deliver the service required. Whether sourcing an acceptable mortgage offer or topping up your pension account.',
        },
        {
          icon: 'handshake',
          title: 'Ongoing Service',
          description:
            'Either through annual reviews or other methods we can ensure that the recommendation provided is still suitable for your situation. We will be able to make changes and research new scenarios based on your changing needs.',
        },
      ]"
      :row-size="2"
    />
  </Container>
</template>
