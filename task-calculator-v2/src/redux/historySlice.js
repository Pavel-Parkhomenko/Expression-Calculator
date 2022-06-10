import {createSlice} from '@reduxjs/toolkit'

const historySlice = createSlice({
  name: 'history',
  initialState:{
    history: [],
  },
  reducers:{
    clearHistory(state){
      state.history = []
    },
    addHistory(state, payload){
      console.log(payload)
      state.history = [...state.history, payload.payload.display]
    },
  },
})

export const {clearHistory, addHistory} = historySlice.actions

export default historySlice.reducer
