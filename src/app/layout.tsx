import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free PDF to Word Converter Online | Convert Word to PDF – ConvertlyAI',
  description: 'Convert PDF to Word and Word to PDF instantly with our free online converter. Fast, secure, no watermark, and easy to use.',
  keywords: 'PDF to Word converter, Word to PDF converter, online converter, free PDF converter, convert PDF to Word',
  openGraph: {
    title: 'Free PDF to Word Converter Online | Convert Word to PDF – ConvertlyAI',
    description: 'Convert PDF to Word and Word to PDF instantly with our free online converter. Fast, secure, no watermark, and easy to use.',
    type: 'website',
    url: 'https://convertlyai.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free PDF to Word Converter Online | Convert Word to PDF – ConvertlyAI',
    description: 'Convert PDF to Word and Word to PDF instantly with our free online converter. Fast, secure, no watermark, and easy to use.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification_code',
    yandex: 'verification_code',
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'ConvertlyAI - Free PDF to Word Converter',
  description: 'Convert PDF to Word and Word to PDF instantly with our free online converter. Fast, secure, no watermark, and easy to use.',
  url: 'https://convertlyai.com',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web Browser',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  featureList: [
    'PDF to Word conversion',
    'Word to PDF conversion',
    'No registration required',
    '100% secure and private',
    'Automatic file deletion after 1 hour',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      {children}
    </html>
  )
}