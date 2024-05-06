declare global {
  type CardType = {
    image: string;
    alt: string;
    title: string;
    description: string;
    linkText: string;
    link: string;
  }

  type IconCardType = {
    icon: string;
    title: string;
    description: string;
  }
}