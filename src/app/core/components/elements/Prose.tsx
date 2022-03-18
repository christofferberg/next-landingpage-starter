import type { ReactNode } from 'react'

import { Container } from '@components/elements/Container'

type Props = {
  children: ReactNode
}

export const Prose = ({ children }: Props) => {
  return (
    <Container size="prose">
      <article className="prose prose-sm mx-auto max-w-none sm:prose-base">
        {children}
      </article>
    </Container>
  )
}
