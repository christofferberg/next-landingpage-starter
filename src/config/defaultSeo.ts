import { DefaultSeoProps } from 'next-seo'

const defaultSeo: DefaultSeoProps = {
  title: 'ACME',
  titleTemplate: 'ACME - %s',
  description: '',
  openGraph: {
    locale: 'da',
    site_name: 'ACME',
    title: 'ACME',
    type: 'website',
    url: 'https://acme.dk/',
    description: '',
    images: [
      {
        url: 'https://acme.dk/images/social/og.jpg',
        alt: '',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    cardType: 'summary_large_image',
  },
}
export default defaultSeo
