import { createSlice } from '@reduxjs/toolkit'

import type { RootState } from '@redux/store'
import { useAppSelector } from '@redux/hooks'

type UIState = {
  menuIsOpen: boolean
}

const initialState: UIState = {
  menuIsOpen: false,
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.menuIsOpen = !state.menuIsOpen
    },
  },
})

const { reducer, actions } = uiSlice

export const { toggleMenu } = actions

// Selectors
const selectMenuState = (state: RootState) => state.ui.menuIsOpen

// Hooks
export const useMenuState = () => useAppSelector(selectMenuState)

export default reducer
