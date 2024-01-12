import type { Metadata } from 'next'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react'
import Script from 'next/script'
import './globals.css'


export const metadata: Metadata = {
  title: 'Jack Davey',
  description: 'A portfolio website for Jack Davey',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <SpeedInsights />
        <Analytics />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-MR3WRB99PZ" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag() {dataLayer.push(arguments); }
          gtag('js', new Date());
          gtag('config', 'G-MR3WRB99PZ');
          `}
        </Script>
      </body>
    </html>
  )
}
