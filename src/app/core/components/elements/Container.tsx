import clsx from 'clsx'
import { ElementType, ReactNode } from 'react'

interface Props {
  /**
   * Allow Polymorphism
   *
   * @link {https://react-typescript-cheatsheet.netlify.app/docs/advanced/patterns_by_usecase/#polymorphic-components-eg-with-as-props}
   */
  as?: ElementType<any>

  /**
   * Custom classnames
   */
  className?: string

  /**
   * Children
   */
  children?: ReactNode

  /**
   * The size of the container (width)
   */
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'prose'
}

export const Container = ({
  children,
  className,
  as: Component = 'div',
  size = 'xl',
}: Props) => {
  const rootClassName = clsx(
    'mx-auto w-full',
    {
      'max-w-screen-sm px-6 sm:px-8 lg:px-12': size === 'sm',
      'max-w-screen-md px-6 sm:px-8 lg:px-12': size === 'md',
      'max-w-screen-lg px-6 sm:px-8 lg:px-12': size === 'lg',
      'max-w-screen-xl px-6 sm:px-8 lg:px-12 2xl:px-0': size === 'xl',
      'max-w-screen-xl px-6 sm:px-8 lg:px-12 2xl:max-w-screen-2xl':
        size === '2xl',
      'max-w-[75ch] px-5 sm:px-8 lg:px-0': size === 'prose',
    },
    className
  )

  return <Component className={rootClassName}>{children}</Component>
}
