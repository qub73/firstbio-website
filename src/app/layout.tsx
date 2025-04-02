import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'First Biotech Company',
  description: 'Advanced R&D services and scientific support for innovation and intellectual property defense.',
  icons: {
    icon: [
      { url: '/images/logo_small.jpg' },
      { url: '/favicon.ico' }
    ],
    apple: [
      { url: '/images/logo_small.jpg' }
    ],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo_small.jpg" />
        <link rel="apple-touch-icon" href="/images/logo_small.jpg" />
      </head>
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
} 