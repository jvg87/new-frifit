import './globals.css';
import { Roboto } from 'next/font/google';

import Navbar from '@/components/Navbar';

const roboto = Roboto({ 
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
      <body className={roboto.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
