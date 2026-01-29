import './globals.css'
import type { Metadata } from 'next'
import { Toaster } from 'react-hot-toast'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import CustomCursor from '@/components/CustomCursor'

export const metadata: Metadata = {
  title: 'INTERNITY LANDS | Premium Real Estate in Dubai',
  description: 'Buy & Sell Premium Properties in Dubai. Luxury villas, apartments, and exclusive real estate opportunities with INTERNITY LANDS - Your trusted partner in premium property investment.',
  keywords: 'Dubai real estate, luxury properties, premium villas, apartments Dubai, property investment, INTERNITY LANDS',
  authors: [{ name: 'INTERNITY LANDS' }],
  openGraph: {
    title: 'INTERNITY LANDS | Premium Real Estate in Dubai',
    description: 'Buy & Sell Premium Properties in Dubai',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-primary-950 text-primary-50 antialiased">
        <div className="noise-overlay" />
        <CustomCursor />
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <FloatingButtons />
        <Toaster
          position="bottom-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#171717',
              color: '#fafafa',
              border: '1px solid rgba(201, 169, 98, 0.3)',
            },
            success: {
              iconTheme: {
                primary: '#c9a962',
                secondary: '#0a0a0a',
              },
            },
          }}
        />
      </body>
    </html>
  )
}
