export const useContactDetails = () => {
    return useState('contactDetails', () => [
        {
            link: 'tel:01474704444',
            text: 'Call Us',
            altText: '01474 704444',
            type: 'phone'
        },
        {
            link: 'mailto:enquires@hartleyassociates.info',
            text: 'Email Us',
            altText: 'hartleyassociates.info',
            type: 'email'
        },
    ])
}