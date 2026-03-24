import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'OCTEL - Premium Digital Solutions',
  description: 'Build your digital future with precision. Expert web development, UI/UX design, and mobile solutions for your business.',
  keywords: ['web development', 'UI/UX design', 'digital solutions', 'technology'],
  creator: 'OCTEL',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://octel.dev',
    title: 'OCTEL - Premium Digital Solutions',
    description: 'Build your digital future with precision. Expert web development, UI/UX design, and mobile solutions.',
    siteName: 'OCTEL',
  },
  icons: {
    icon: [
      { url: '/logo.svg', type: 'image/svg+xml' },
    ],
    shortcut: ['/logo.svg'],
    apple: [{ url: '/logo.svg', type: 'image/svg+xml' }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
