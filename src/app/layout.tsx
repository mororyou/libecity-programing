'use client'
import Footer from '../components/footer'
import HeaderResponsive from '../components/header'
import { HEADER_LINKS } from '../constant/common'
import RootStyleRegistry from './emotion'
import ReactQueryWrapper from './ReactQueryWrapper'
import '../styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head />
      <body className="flex min-h-screen flex-col items-center justify-center font-mono text-gray-800">
        <RootStyleRegistry>
          <ReactQueryWrapper>
            <HeaderResponsive links={HEADER_LINKS} />
            <main className="flex w-screen flex-1 flex-col items-center">
              {children}
            </main>
            <Footer />
          </ReactQueryWrapper>
        </RootStyleRegistry>
      </body>
    </html>
  )
}
