import React from 'react'
import {useSelector} from "react-redux"
import {DisplayStyled} from "@/components/Styles/stylesDisplay"

export function Display() {
  const display = useSelector(state => state.display.display)
  return(
    <DisplayStyled>
      {display}
    </DisplayStyled>
  )
}
