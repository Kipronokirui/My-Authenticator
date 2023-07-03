import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import Navbar from '@/components/common/Navbar'
import Footer from '@/components/common/Footer'
import Provider from '@/redux/provider'
import { Setup } from '@/components/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata:Metadata = {
  title: 'My django-next js website',
  description: 'Creating a full website with django and next js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Setup />
          <Navbar />
          <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 my-8'>
            {children}
          </div>
          <Footer />
        </Provider>
      </body>
    </html>
  )
}
