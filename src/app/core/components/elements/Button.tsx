import clsx from 'clsx'
import { ComponentPropsWithRef, ElementType, forwardRef } from 'react'

export type ButtonTypes = 'blue' | 'black' | 'ghost'

type Props = ComponentPropsWithRef<'button'> & {
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
   * The button variant
   * @default 'blue'
   */
  variant?: ButtonTypes

  /**
   * If `true`, the button will show a spinner.
   * @default false
   */
  isLoading?: boolean

  /**
   * If `true`, the button will be disabled.
   * @default false
   */
  isDisabled?: boolean
}

type Ref = HTMLButtonElement

const buttonStyleVariants: Record<ButtonTypes, string> = {
  blue: 'bg-brand-blue hover:bg-brand-blue-lighter active:bg-brand-blue text-white',
  black: 'bg-black text-white',
  ghost: 'border border-brand-blue hover:bg-brand-blue hover:text-white',
}

export const Button = forwardRef<Ref, Props>(
  (
    {
      as: Component = 'button',
      className,
      isDisabled,
      isLoading,
      children,
      variant = 'black',
      ...rest
    },
    ref
  ) => {
    const rootClassName = clsx(
      'flex items-center justify-center rounded px-4 py-2 font-medium transition-colors whitespace-nowrap text-sm h-[40px]',
      buttonStyleVariants[variant],
      {
        'cursor-not-allowed opacity-40': isDisabled || isLoading,
      },
      className
    )

    return (
      <Component
        ref={ref}
        data-type="button"
        aria-busy={isLoading}
        className={rootClassName}
        disabled={isDisabled || isLoading}
        {...rest}
      >
        <span>{children}</span>
      </Component>
    )
  }
)

Button.displayName = 'Button'
