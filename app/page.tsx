import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-12">
        <Link href='/text-to-binary'>Text to Binary</Link>
        <Link href='/binary-to-text'>Binary to Text</Link>
        <Link href='/case-converter'>Case Converter</Link>
        <Link href='/word-replacer'>Word Replacer</Link>
        <Link href='/password-generator'>Password Generator</Link>
    </main>
  )
}
