'use client'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold">MobileCrafter</h1>
      <p className="mt-4">A starter scaffold for a simplified mobile app builder.</p>
      <nav className="mt-8 space-x-4">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/preview">Preview</Link>
      </nav>
    </main>
  )
}
