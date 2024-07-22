export const useSocialMediaLinks = () => {
  return useState('socialMediaLinks', () => [
    {
      link: 'https://www.facebook.com/HartleyAssociatesinfo',
      text: 'facebook',
      fa: 'facebook-f',
    },
    {
      link: 'https://uk.linkedin.com/company/hartleyassociates',
      text: 'linkedin',
      fa: 'linkedin-in',
    },
  ])
}
