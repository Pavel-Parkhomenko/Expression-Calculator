import React from 'react'
import {DisplayStyled} from "@/components/Display/components"
import {useSelector} from "react-redux"

export function Display() {
  const display = useSelector(state => state.display.display)
  return(
    <DisplayStyled>
      {display}
    </DisplayStyled>
  )
}
