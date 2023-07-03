import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata:Metadata = {
    title: 'Register for your account',
    description: 'Creating a full website with django and next js',
}
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Home Page</h1>
    </main>
  )
}
