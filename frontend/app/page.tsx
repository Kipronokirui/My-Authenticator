import Image from 'next/image'
import type { Metadata } from 'next'
import HomePage from '@/components/homepage/HomePage'

export const metadata:Metadata = {
    title: 'Register for your account',
    description: 'Creating a full website with django and next js',
}
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HomePage />
    </main>
  )
}
