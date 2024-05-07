export const useContactDetails = () => {
    return useState('contactDetails', () => ({
        singleLineAddress: 'Unit G3 Ash House Business Centre, Kent DA3 8JD',
        multiLineAddress: 'Unit G3 Ash House Business Centre, <br />Ash Road, <br />Longfield, Kent DA3 8JD, GB',
        linkList: [
            {
                link: 'tel:+447910729832',
                text: 'Call Us',
                altText: '+44 7910 729832',
                type: 'phone',
            },
            {
                link: 'mailto:enquires@hartleyassociates.info',
                text: 'Email Us',
                altText: 'enquires@hartleyassociates.info',
                type: 'email',
            },
        ],
    }))
}
