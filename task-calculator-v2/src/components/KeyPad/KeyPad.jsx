import React, {useRef} from 'react'
import {ControlPanelStyled, KeyGridNumber, KeyGridOperations} from "@/components/KeyPad/components"
import {useDispatch, useSelector} from "react-redux"
import {addToDisplay, removeAllFromDisplay, removeOneFromDisplay, computeExpression} from "@/redux/displaySlice"
import {Button} from "@/components/Button"
import {BUTTONS_OPERATIONS, BUTTONS_NUMBERS, OPERATIONS} from "@/constants"
import {addHistory} from "@/redux/historySlice"

export function KeyPad() {

  const dispatch = useDispatch()
  const display = useSelector(state => state.display.display)
  const prevKey = useRef('')

  const handleClickKey = event => {
    if (event.target.tagName.toLowerCase() !== 'button') return
    const key = event.target.textContent
    switch (key) {
      case "C":
        dispatch(removeOneFromDisplay())
        break
      case "CE":
        dispatch(removeAllFromDisplay())
        break
      case "=":
        dispatch(addHistory({display}))
        dispatch(computeExpression())
        break

      default: {
        if(OPERATIONS.includes(key) && OPERATIONS.includes(prevKey.current)) return
        if(prevKey.current === '' && OPERATIONS.includes(key)) return
        if(prevKey.current === '.' && key === '.') return
        dispatch(addToDisplay(key))
        prevKey.current = key
      }
    }
  }

  return (
    <ControlPanelStyled onClick={handleClickKey}>
      <KeyGridNumber>
        { BUTTONS_NUMBERS.map(x => <Button key={x} title={x}/>) }
      </KeyGridNumber>
      <KeyGridOperations>
        { BUTTONS_OPERATIONS.map(x => <Button key={x} title={x}/>) }
      </KeyGridOperations>
    </ControlPanelStyled>
  )
}
