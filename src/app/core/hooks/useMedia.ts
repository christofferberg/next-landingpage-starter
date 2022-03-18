import { useMedia as useMediaHook } from 'react-use'

import { screens } from '@config/screens'

type Breakpoint = keyof typeof screens

/**
 * Tracks state of a predefined CSS media query
 *
 * @param breakpoint - The breakpoint reference
 * @param defaultState - SSR default state
 */
export function useMedia(
  breakpoint: Breakpoint,
  defaultState = false
): boolean {
  return useMediaHook(`(min-width: ${screens[breakpoint]})`, defaultState)
}
