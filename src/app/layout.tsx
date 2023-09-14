import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import { ToastContainer } from '@/components/ToastContainer'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import { NextFontWithVariable } from 'next/dist/compiled/@next/font'
import { Space_Grotesk, Inter, Roboto } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin']
})

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900']
}) as NextFontWithVariable

export const metadata: Metadata = {
  title: 'Reth Portfolio',
  description: 'The best programator of network and ...',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${roboto.variable}`}>
        <Navbar />
        <ToastContainer />
        {children}
        <Footer />
      </body>
    </html>
  )
}
