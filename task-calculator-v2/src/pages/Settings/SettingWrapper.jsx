import React from 'react'
import {Settings} from "@/pages/Settings/index"
import {useDispatch, useSelector} from "react-redux"

export default () => {

  const dispatch = useDispatch()
  const theme = useSelector(state => state.theme.theme)

  return (
    <Settings dispatch={dispatch} theme={theme}/>
  )
}
