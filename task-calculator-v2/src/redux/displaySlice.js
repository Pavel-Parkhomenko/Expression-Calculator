import { createSlice } from '@reduxjs/toolkit'
import { changeSing, checkAddToDisplay, checkExpression, replaceOperation } from "@/helpers"
import { calculator } from "@/compute/compute"

const displaySlice = createSlice({
  name: 'display',
  initialState:{
    expression: "",
    display: "",
    answer: "",
  },
  reducers: {
    addToDisplay(state, action) {
      const { expression, display } = checkAddToDisplay({ ...state }, action.payload)
      state.display = display
      state.expression = expression
    },

    removeOneFromDisplay(state) {
      state.display = state.display.substring(0, state.display.length - 1)
      state.expression = state.display
        ? state.expression.substring(0, state.expression.length - 1)
        : state.expression
    },

    removeAllFromDisplay(state) {
      state.expression = ''
      state.display = ''
    },

    changeSign(state){
      const { display, expression } = changeSing({ ...state })
      state.display = display
      state.expression = expression
      console.log(state.expression)
    },

    computeExpression(state){
      state.answer = checkExpression(state.expression)
        ? calculator(replaceOperation(state.expression))
        : "Ошибка"

      if(state.answer === "Ошибка")
        state.display = state.answer
      else if(/^-\d+\.\d{3,}$|^\d+\.\d{3,}$/.test(state.answer))
        state.display = state.answer.toFixed(3)
      else state.display = state.answer

      state.expression = ''
    },
  },
})

export const {
  addToDisplay,
  removeOneFromDisplay,
  removeAllFromDisplay,
  computeExpression,
  changeSign,
} = displaySlice.actions

export default displaySlice.reducer
