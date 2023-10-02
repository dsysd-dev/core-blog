import "globals.css";
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Image from "next/image";
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'dsysd.dev',
  description: 'Awesome Resources and Blogs on Distributed Systems',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const header = (
    <header>
      <div className="text-center bg-slate-800 p-8 my-6 rounded-md">
        <Image src="/dsysd_logo.png" width={100} height={100} className="mx-auto" alt={""} />
        <Link href={`/`}>
          <h1 className="text-2xl text-white font-bold mt-4">dsysd.dev</h1>
        </Link>
        <p className="text-slate-300">Awesome resources and blogs on Golang, Distributed Systems, devops, Blockchain, Solidity and Rust</p>
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div className="border-t border-slate-400 mt-12 py-6 text-center">
        <h3>Distributed Systems Developer</h3>
      </div>
    </footer>
  );

  return (
    <html lang="en">
      <body>
        <div className="mx-auto px-6 max-w-2xl">
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  )
}
