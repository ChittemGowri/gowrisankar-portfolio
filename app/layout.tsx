import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Chittem Gowri Sankar | AI/ML & Data Science Portfolio',
  description: 'Portfolio of Chittem Gowri Sankar, Computer Science undergraduate specializing in AI/ML, Data Science, Computer Vision, Generative AI, and real-world machine learning projects.',
  keywords: [
    'Chittem Gowri Sankar',
    'AI ML Portfolio',
    'Data Science Fresher',
    'Machine Learning Projects',
    'Python Developer',
    'Computer Science Student',
    'Streamlit Projects',
    'RAG Chatbot',
    'Sign Language Recognition',
    'Customer Churn Prediction',
  ],
  authors: [{ name: 'Chittem Gowri Sankar' }],
  creator: 'Chittem Gowri Sankar',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Chittem Gowri Sankar | AI/ML & Data Science Portfolio',
    description: 'Computer Science undergraduate specializing in AI/ML, Data Science, Computer Vision, and Generative AI. Building real-world machine learning projects.',
    siteName: 'Gowri.dev',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chittem Gowri Sankar | AI/ML & Data Science Portfolio',
    description: 'Computer Science undergraduate specializing in AI/ML, Data Science, Computer Vision, and Generative AI.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0F172A' },
    { media: '(prefers-color-scheme: dark)', color: '#0F172A' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
