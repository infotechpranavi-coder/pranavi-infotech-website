import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Pranavi Infotech - Enterprise Technology Solutions',
  description:
    'Leading enterprise technology solutions provider specializing in software development, consulting, and digital transformation for businesses worldwide.',
  keywords:
    'technology, software development, consulting, enterprise solutions, digital transformation',
  generator: 'v0.app',
  icons: {
    icon: '/favicon.ico',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#0f1728',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased uppercase-none`}>
        <div className="kinetic-overlay" />
        {children}
      </body>
    </html>
  )
}
