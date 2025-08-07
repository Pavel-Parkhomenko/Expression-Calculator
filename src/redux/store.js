import { combineReducers, configureStore } from '@reduxjs/toolkit'
import displaySlice from "@/redux/displaySlice"
import historySlice from "@/redux/historySlice"
import themeSlice from "@/redux/themeSlice"

const rootReducer = combineReducers({
  display: displaySlice,
  history: historySlice,
  theme: themeSlice,
})

export default configureStore({
  reducer: rootReducer,
})
