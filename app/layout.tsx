import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Source_Serif_4 } from 'next/font/google'
import './globals.css'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

const _inter = Inter({ subsets: ['latin'] })
const _sourceSerif = Source_Serif_4({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Teras Trustees Berhad | Malaysian Trustee & Estate Planning',
    template: '%s | Teras Trustees Berhad',
  },
  description:
    'A Malaysian trust company providing wasiat and will writing, private trusts, estate administration, escrow and custody, and API-based digital trustee services.',
  keywords: [
    'Malaysian trustee',
    'trust company Malaysia',
    'wasiat',
    'will writing Malaysia',
    'estate administration',
    'corporate trustee',
    'escrow agent Malaysia',
    'digital trustee',
    'trustee API',
  ],
  generator: 'v0.app',
  openGraph: {
    title: 'Teras Trustees Berhad',
    description:
      'Trustee services for Malaysian families and institutions — wills, private trusts, estate administration, escrow and digital trusteeship.',
    locale: 'en_MY',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#12372a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-MY" className="bg-background">
      <body className="font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
