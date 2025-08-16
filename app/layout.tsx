import './globals.css'
import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-playfair',
})
export const metadata = {
  title: 'Next.js 15 + Tailwind Starter',
  description: 'Full starter with App Router and Tailwind CSS.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={'${playfair.variable}'}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  )
}
