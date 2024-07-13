<script setup lang="ts">
useHead({
  meta: [{ name: 'robots', content: 'noindex, nofollow' }],
})
</script>

<template>
  <Container>
    <Hero title="Contact Us" img="/images/contact-us--banner.jpg" alt="Person on a tablet computer" />

    <ContactSection :submitted="true" />
  </Container>
</template>
