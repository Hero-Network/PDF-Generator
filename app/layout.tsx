import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['500'],
  variable: '--font-plus-jakarta'
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://heronetwork.io'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Free Filming Guide Generator | Create Custom Video Briefs for Clients',
  description:
    'Create a custom-branded filming guide PDF in seconds. Upload your logo, pick your brand colors, and download a professional one-page video brief — free, no signup required.',
  robots: { index: true, follow: true },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: 'Free Filming Guide Generator | Hero Network',
    description:
      'Stop getting bad footage from clients. Create a branded, one-page filming brief with your logo and colors — delivered as a professional PDF in seconds.',
    url: siteUrl,
    siteName: 'Hero Network',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Filming Guide Generator',
    description:
      'Create a branded filming brief PDF for your clients in seconds — free, no design skills needed.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${plusJakarta.variable} bg-[#1F2937]`}>{children}</body>
    </html>
  )
}
