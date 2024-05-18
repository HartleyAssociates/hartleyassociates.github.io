<template>
  <Container>
    <Hero title="Protection" />

    <RichText id-prop="residential-mortgages">
      <p>
        While we understand the need for our car, our home and our travel arrangements we often forget the need to
        ensure that our debts, our income and our family are protected in the event of ill health or death. Below are
        various cover options to suit different needs at different budgets we would be happy to talk more about them to
        you,
        <NuxtLink to="/contact-us">find out more</NuxtLink>.
      </p>
    </RichText>

    <IconCardGrid
      :cards="[
        {
          icon: 'arrow-right',
          title: 'Decreasing term assurance',
          description:
            'This cover is designed to decrease in line with your mortgage debt and is designed to repay the remaining mortgage debt in the event of your death.',
          idProp: 'decreasing-term-assurance',
        },
        {
          icon: 'arrow-right',
          title: 'Life assurance level',
          description:
            'This type of cover will provide you with a fixed lump sum for a set term e.g 20 years. This is designed to be paid in the event of your to those financially dependant on you giving you peace of mind if worse were to happen.',
          idProp: 'life-assurance',
        },
        {
          icon: 'arrow-right',
          title: 'Critical Illness',
          description:
            'Being diagnosed with a critical illness is life changing. Critical illness cover is there to provide some financial relief in  worst case scenarios. It is designed to pay out a lump sum in the event you are diagnosed with having certain types of critical Illness which are specified within the policy terms.',
          idProp: 'critical-illness',
        },
        {
          icon: 'arrow-right',
          title: 'Income Protection',
          description:
            'Being unable to work due to sickness or accident can place a great deal of strain on your household finances. You may be able to protect up to 60% of your gross salary in a monthly tax free lump sum. Which can ease any financial hardship whilst you are unable to work.',
          idProp: 'income-protection',
        },
        {
          icon: 'arrow-right',
          title: 'Business Protection',
          description:
            'From a Relevant Life plan which offers a death in service benefit to their employees to Key Person Insurance to protect against the loss of an individual who is vital to the running of the business we at Hartley Associates is well versed and experienced in business protection. ',
          idProp: 'business-protection',
        },
        {
          icon: 'arrow-right',
          title: 'Accident and Sickness Insurance',
          description:
            'A shorter term solution than standard income protection this cover is designed to fit more limited budgets it provides short term funding in the event that you are unable to work due to accident or illness. ',
          idProp: 'accident-and-sickness-insurance',
        },
      ]"
    />
  </Container>
</template>
