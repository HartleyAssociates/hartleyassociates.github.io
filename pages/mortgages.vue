<script setup lang="ts">
useSeoMeta({
  description:
    'At Hartley Associates we run a dedicated mortgage broker service covering the whole of the UK. We aim to work closely with you on your mortgage journey helping you in understanding your mortgage journey and find a solution that suits your needs.',
})
</script>

<template>
  <Container>
    <Hero title="Mortgages" img="/images/mortgage--banner.jpg" alt="Five red monopoly houses sitting on a table" />

    <RichText id-prop="residential-mortgages">
      <p>
        <strong>Please note your home may be repossessed if you do not keep up repayments on your mortgage.</strong>
      </p>
      <p>
        At Hartley Associates we run a dedicated mortgage broker service covering the whole of the UK. We aim to work
        closely with you on your mortgage journey helping you in understanding your mortgage journey and find a solution
        that suits your needs. If you would like to start your journey please get in
        <NuxtLink to="/contact-us">contact</NuxtLink>.
      </p>
    </RichText>

    <IconCardGrid
      :cards="[
        {
          icon: 'key',
          title: 'First Time Buyers',
          description:
            'Purchasing a home as a first time buyer can feel overwhelming. Even with all the resources and guides online it can still help to talk to someone. We aim to make things as understandable and straightforward to help you get your foot onto the housing ladder.',
        },
        {
          icon: 'truck',
          title: 'Moving Home',
          description:
            'Whether downsizing or moving into your new home we can help. We have access to the whole mortgage market and specialist deals. Whether this new property is a new build or non standard construction we are here to help.',
        },
        {
          icon: 'house-circle-check',
          title: 'Remortgage',
          description: `Wanting to remortgage is an essential part of your mortgage journey. Whether you want to release some cash, do home improvements, or simply find a better rate. In today's climate many customers are concerned about rising levels of debt, please don’t be. A debt consolidation remortgage may be a suitable solution we can help with.`,
        },
        {
          icon: 'users',
          title: 'Self Employed Mortgages',
          description: `Whether a sole trader or a limited company director we have successfully obtained mortgage offers for many self employed individuals over the years. Yes applying for a mortgage when self employed is more complex however with our help and experience at your disposal it doesn't have to be!`,
        },
        {
          icon: 'credit-card',
          title: 'Poor Credit',
          description: `At Hartley associates we understand that each client's journey is individual. Their needs might require a specialised service. We delivered successful mortgage results to clients with financial difficulties in their past. If you would like to know more please send us a message on the Contact Us page.`,
        },
        {
          icon: 'user-shield',
          title: 'Protection Consultation',
          description:
            'At the end of each mortgage application process we will invite you to talk about protection/insurance options to protect against the worst happening and lessening the negative financial effects on you and your loved ones. We have access to a wide range of protection providers to source a solution for any need or budget.',
        },
      ]"
    />

    <ImageText
      image="/images/mortgage--two.jpg"
      alt="People dancing during moving house"
      title="Fees."
      description="There may be a mortgage advice fee. For a single mortgage you will not pay more than £495 as a broker fee. The actual amount you will pay will entirely depend on your circumstances. All initial consultation meetings are carried out free of charge."
    />

    <IconCardGrid
      id-prop="buy-to-let-mortgages"
      title="Buy To Let"
      description="With government policy making it harder and harder for existing landlords we feel it is essential to seek out expert mortgage advice to keep your portfolio profitable in these uncertain times."
      :cards="[
        {
          icon: 'house-person-return',
          title: 'Privately owned buy to let',
          description:
            'Many existing landlords see their investment properties as a life line in retirement or something to pass down to future generations. Let us help you make informed decisions regarding the buy to let financing on these properties whether it be expanding your portfolio, capital raising or a carrying out a let to buy.',
        },
        {
          icon: 'house-building',
          title: 'Limited company buy to lets',
          description:
            'With the rising cost of being a landlord many are moving over into holding their rental properties through a limited company. This can offer tax relief on financial costs such as mortgage interest and arrangement fees and further flexibility for planning. Mortgage lenders do offer specialised limited company mortgage products which you may qualify for. ',
        },
      ]"
      :row-size="2"
    />

    <ImageText
      image="/images/mortgage--three.jpg"
      alt="Multiple houses"
      title="Fees."
      description="There may be a mortgage advice fee. For a single mortgage you will not pay more than £495 as a broker fee. The actual amount you will pay will entirely depend on your circumstances. All initial consultation meetings are carried out free of charge."
      text-alignment="right"
    />

    <IconCardGrid
      id-prop="mortgage-checklist"
      title="Mortgage Checklist"
      description="The mortgage process can be confusing. So you have some idea of what information you need to gather in order to hit the ground running on your mortgage journey."
      :cards="[
        {
          icon: 'memo-circle-check',
          title: 'How much can you borrow',
          description:
            'This differs from lender to lender and is entirely based on your circumstances. However this will mainly be influenced by your earnings and your commitments in the background (credit cards, car loans, childcare, medical bills etc).',
        },
        {
          icon: 'memo-circle-check',
          title: 'Your existing deal',
          description:
            'Annual Mortgage statements are set out each year at the start of the year by most lenders. If you do not have this to hand do not hesitate in contacting your mortgage lender to see if it can be accessed online or posted to you. This will give you all the relevant information on your current mortgage deal.',
        },
        {
          icon: 'memo-circle-check',
          title: 'Check your credit',
          description:
            'Many mortgage providers used multiple credit referencing agencies. If you have a lot of background borrowing or have a history of credit issues we would suggest obtaining an up to date credit report from either Experian, Equifax or clearscore. This will provide you with a clear snapshot of your credit profile.',
        },
        {
          icon: 'memo-circle-check',
          title: 'What the mortgage lender will ask for',
          description:
            'The mortgage lender will ask personal and address ID they will also require at least 3 monthly payslips if employed and at least 2 years Tax year overviews and calculations if self employed. This is a good starting point but they may also ask for personal and business bank statements, employment contracts and may even ask to write to your employer.',
        },
      ]"
      :row-size="2"
    />
  </Container>
</template>
