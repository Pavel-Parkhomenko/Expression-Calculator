import { createSlice } from '@reduxjs/toolkit'
import {checkExpression, replaceOperation} from "@/helpers"
import {calculator} from "@/compute/compute"

const displaySlice = createSlice({
  name: 'display',
  initialState:{
    display: "35/9-(3+.55*2)/3",
  },
  reducers:{
    addToDisplay(state, action) {
      state.display = state.display + action.payload
    },

    removeOneFromDisplay(state) {
      state.display = state.display.substring(0, state.display.length - 1)
    },

    removeAllFromDisplay(state) {
      state.display = ''
    },

    computeExpression(state){
      state.display = checkExpression(state.display)
        ? calculator(replaceOperation(state.display)).toFixed(3).toString()
        : "Ошибка"
    },
  },
})

export const {
  addToDisplay,
  removeOneFromDisplay,
  removeAllFromDisplay,
  computeExpression,
} = displaySlice.actions

export default displaySlice.reducer
