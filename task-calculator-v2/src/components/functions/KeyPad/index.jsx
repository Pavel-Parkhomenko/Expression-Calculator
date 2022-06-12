import React, { useRef } from 'react'
import { useDispatch, useSelector } from "react-redux"
import {
  addToDisplay,
  removeAllFromDisplay,
  removeOneFromDisplay,
  computeExpression,
  changeSign,
} from "@/redux/displaySlice"
import { Button } from "@/components/functions/Button"
import { BUTTONS_OPERATIONS, BUTTONS_NUMBERS } from "@/constants"
import { addHistory } from "@/redux/historySlice"
import { ControlPanelStyled, KeyGridNumber, KeyGridOperations } from "@/components/Styles/stylesKeypad"
import { checkInputExpression } from "@/helpers"

export function KeyPad() {

  const dispatch = useDispatch()
  const expression = useSelector(state => state.display.expression)
  const prevKey = useRef('')

  const handleClickKey = event => {
    if (event.target.tagName.toLowerCase() !== 'button') return
    const key = event.target.textContent
    switch (key) {
      case "C":
        dispatch(removeOneFromDisplay())
        prevKey.current = "0"
        break
      case "CE":
        dispatch(removeAllFromDisplay())
        break
      case "=":
        dispatch(addHistory({ expression }))
        dispatch(computeExpression())
        break
      case "+/-":
        dispatch(changeSign())
        break
      default: {
        if(!checkInputExpression(prevKey.current, key)) return
        dispatch(addToDisplay(key))
        prevKey.current = key
      }
    }
  }

  return (
    <ControlPanelStyled onClick={handleClickKey}>
      <KeyGridNumber>
        { BUTTONS_NUMBERS.map(x => <Button key={x} title={x} />) }
      </KeyGridNumber>
      <KeyGridOperations>
        { BUTTONS_OPERATIONS.map(x => <Button key={x} title={x} />) }
      </KeyGridOperations>
    </ControlPanelStyled>
  )
}
