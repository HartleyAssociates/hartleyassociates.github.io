<script setup lang="ts">
useSeoMeta({
  description: 'Meet our team members at Hartley Associates.',
})
</script>

<template>
  <Container>
    <Hero title="Our Team" img="/images/our-team--banner.jpg" alt="Multi-coloured plastic board game pieces" />

    <ImageText
      title="Howard Morgan"
      description="Since starting in the industry in 1987 Howard has developed his knowledge in all areas of financial planning. Spending most of his time speaking to clients about their pensions and investment portfolios carrying out any agreed actions to help clients grow their money or access their pension."
      text-alignment="left"
      image-type="portrait"
      image="https://placehold.co/400x500"
      container-width="slender"
      link="https://www.linkedin.com/in/howard-morgan-887611319/"
      link-text="Linkedin"
    />

    <ImageText
      title="Oliver Morgan"
      description="With 10 years of experience in the finance industry, Oliver has developed a wealth of technical knowledge in all areas of financial planning. He specialises in mortgage advice, helping clients with a diverse range of needs. Whether it be first time buyers getting their first step on the property ladder or helping portfolio landlords achieve their goal, regarding their portfolio."
      text-alignment="right"
      image-type="portrait"
      image="/images/ollie.jpg"
      container-width="slender"
      link="https://www.linkedin.com/in/oliver-morgan-bb5b611a7/"
      link-text="Linkedin"
    />

    <ImageText
      title="Jason Summerfield"
      description="Jason acts as our link to the wider financial planning network. Jason founded OCTO FP after having held several senior positions within the financial industry. He has a strong link to Hartley associates and helps us access the wider world of financial planning when needed."
      link="https://octofp.com/jason-summerfield/"
      link-text="OCTO FP"
      link-two="https://2plan.com/"
      link-two-text="2PLAN"
      text-alignment="left"
      image-type="portrait"
      image="/images/jason.jpg"
      container-width="slender"
    />
  </Container>
</template>
