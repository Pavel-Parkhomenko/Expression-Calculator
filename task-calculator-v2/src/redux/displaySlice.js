import { createSlice } from '@reduxjs/toolkit'
import { checkExpression, replaceOperation } from "@/helpers"
import { calculator } from "@/compute/compute"

const displaySlice = createSlice({
  name: 'display',
  initialState:{
    expression: "",
    display: "",
  },
  reducers: {
    addToDisplay(state, action) {
      if(state.display === 'Ошибка') state.display = action.payload
      state.display = /[+-/%*]/.test(state.expression[state.expression.length - 1])
        ? action.payload : state.display + action.payload

      state.expression = state.expression + action.payload
      console.log(state.expression)
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
      if(/^\d+$/.test(state.display))
        state.display = "(" + "-" + state.display + ")"
      else if(/^\(-\d+/.test(state.display))
        state.display = state.display.split('')// !!!!!!!
    },

    computeExpression(state){
      const answer = checkExpression(state.expression)
        ? calculator(replaceOperation(state.expression))
        : "Ошибка"

      console.log(answer)
      console.log(/^-\d+\.\d+$|^\d+\.\d+$/.test(answer.toString()))

      if(answer === "Ошибка")
        state.display = answer
      else if(/^-\d+\.\d+$|^\d+\.\d+$/.test(answer))
        state.display = answer.toFixed(3)

      else state.display = answer
      state.expression = answer
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
