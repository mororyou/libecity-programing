import Footer from '../components/footer'
import Header from '../components/header'
import ReactQueryWrapper from '../ReactQueryWrapper'
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
        <Header />
        <main className="flex w-screen flex-1 flex-col items-center">
          <ReactQueryWrapper>{children}</ReactQueryWrapper>
        </main>
        <Footer />
      </body>
    </html>
  )
}
