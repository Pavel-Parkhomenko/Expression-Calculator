import { createSlice } from '@reduxjs/toolkit'
import { THEME_LIGHT } from "@/constants"

const themeSlice = createSlice({
  name: 'theme',
  initialState:{
    theme: THEME_LIGHT,
  },
  reducers:{
    changeTheme(state, payload){
      state.theme = payload.payload
    },
  },
})

export const { changeTheme } = themeSlice.actions
export default themeSlice.reducer
