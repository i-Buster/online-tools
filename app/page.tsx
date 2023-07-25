import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-12">
        <Link href='/text-to-binary'>Text to Binary</Link>
        <Link href='/binary-to-text'>Binary to Text</Link>
    </main>
  )
}
