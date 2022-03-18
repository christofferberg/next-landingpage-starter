import type { ReactNode } from 'react'

import { Footer } from '@components/common/Footer'
import { Header } from '@components/common/Header'

type Props = {
  /**
   * Children
   */
  children?: ReactNode
}

export const Layout = ({ children }: Props) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
