<template>
  <Container>
    <Hero title="Our Network" />

    <RichText>
      <p>
        Hartley Associates is a trading name of Octo Financial Planning Ltd which is an appointed representative of
        2Plan Wealth Management Limited which is authorised and regulated by the Financial Conduct Authority and is
        entered on the FCA register (<NuxtLink to="https://www.fca.org.uk" target="_blank">www.fca.org.uk</NuxtLink>)
        under reference 972331). Registered office: 127 Unthank Road, Northfolk, NR2 2PE. Registered in England and
        Wales number: 13922409
      </p>
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
