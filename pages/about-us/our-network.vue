<script setup lang="ts">
useSeoMeta({
  description: '',
})
</script>

<template>
  <Container>
    <Hero title="Our Network" img="/images/our-network--banner.jpg" alt="Business people shaking hands" />

    <RichText>
      <Blurb />
    </RichText>

    <CardGrid
      :cards="[
        {
          image: '/2plan.jpg',
          title: '2PLAN Wealth Management',
          linkText: 'View More',
          link: 'https://2plan.com/',
        },
        {
          image: '/octo.jpg',
          title: 'Octo Financial Planning',
          linkText: 'View More',
          link: 'https://octofp.com/',
        },
        {
          image: '/harper.jpg',
          title: 'Mike Harper Finance',
          linkText: 'View More',
          link: 'https://www.harperfinancial.co.uk',
        },
      ]"
    />
  </Container>
</template>
