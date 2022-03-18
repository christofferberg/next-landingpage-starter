import { nanoid } from 'nanoid'

import { asTypedObject } from '@utils/ts-helpers'

type Route = {
  id: string
  title: string
  shortTitle?: string
  href: string
  target?: '_blank' | '_self'
}

export const routes = asTypedObject<Route>()({
  homepage: {
    id: nanoid(),
    title: 'Forside',
    href: '/',
  },
})

export const headerLinks: Route[] = []
export const mobileMenuLinks: Route[] = []
