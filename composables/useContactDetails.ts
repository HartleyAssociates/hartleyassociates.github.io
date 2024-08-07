export const useContactDetails = () => {
  return useState('contactDetails', () => ({
    singleLineAddress: 'Unit G3 Ash House Business Centre, Kent DA3 8JD',
    multiLineAddress: 'Unit G3 Ash House Business Centre, <br />Ash Road, <br />Longfield, Kent DA3 8JD, GB',
    linkList: [
      {
        link: 'tel:+447468962855',
        text: 'Call Us',
        altText: '+44 7468 962855',
        type: 'phone',
      },
      {
        link: 'mailto:enquiries@hartleyassociates.info',
        text: 'Email Us',
        altText: 'enquiries@hartleyassociates.info',
        type: 'email',
      },
    ],
  }))
}
