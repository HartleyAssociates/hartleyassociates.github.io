export const useSocialMediaLinks = () => {
    return useState('socialMediaLinks', () => [
        {
            link: 'https://facebook.com',
            text: 'facebook',
            fa: 'facebook-f'
        },
        {
            link: 'https://uk.linkedin.com/company/hartleyassociates',
            text: 'linkedin',
            fa: 'linkedin-in'
        },
        {
            link: 'https://twitter.com',
            text: 'twitter',
            fa: 'twitter'
        },
    ])
}