import './globals.css';
import { Montserrat } from 'next/font/google';

import Navbar from '@/components/Navbar';

const montserrat = Montserrat({ 
  weight: ['300', '500', '900'],
  subsets: ['latin'] 
})

export const metadata = {
  title: 'FriFit - Gym WebPage',
  description: 'The best gym in town',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
