import Head from 'next/head'
import { FC } from 'react'
import HeaderResponsive from './header'
import { HEADER_LINKS } from '../constant/common'
import Footer from './footer'

type Props = {
  title: string
  active: string
  children: React.ReactNode
}

const Layout: FC<Props> = ({ title, active, children }) => (
  <div className="flex min-h-screen flex-col items-center justify-center font-mono text-gray-800">
    <Head>
      <title>{title}</title>
    </Head>
    <HeaderResponsive links={HEADER_LINKS} active={active} />
    <main className="flex w-screen flex-1 flex-col items-center">
      {children}
    </main>
    <Footer />
  </div>
)

export default Layout
