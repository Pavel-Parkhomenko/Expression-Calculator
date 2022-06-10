import React from 'react'
import {ControlPanelStyled, KeyGridNumber, KeyGridOperations} from "@/components/Styles/stylesKeypad"
import {connect} from "react-redux"
import {addToDisplay, removeAllFromDisplay, removeOneFromDisplay, computeExpression} from "@/redux/displaySlice"
import {Button} from "@/components/classes/Button"
import {BUTTONS_OPERATIONS, BUTTONS_NUMBERS} from "@/constants"
import {addHistory} from "@/redux/historySlice"

class KeyPad extends React.Component {

  handleClickKey = event => {
    if (event.target.tagName.toLowerCase() !== 'button') return
    const {expression} = this.props
    const key = event.target.textContent
    switch (key) {
      case "C":
        this.props.removeOneFromDisplay()
        break
      case "CE":
        this.props.removeAllFromDisplay()
        break
      case "=":
        this.props.addHistory({expression})
        this.props.computeExpression()
        break
      default:
        // if (OPERATIONS.includes(key) && OPERATIONS.includes(prevKey.current)) return
        // if (prevKey.current === '' && OPERATIONS.includes(key)) return
        // if (prevKey.current === '.' && key === '.') return
        this.props.addToDisplay(key)
        // prevKey.current = key
    }
  }

  render() {
    return (
      <ControlPanelStyled onClick={this.handleClickKey}>
        <KeyGridNumber>
          {BUTTONS_NUMBERS.map(x => <Button key={x} title={x}/>)}
        </KeyGridNumber>
        <KeyGridOperations>
          {BUTTONS_OPERATIONS.map(x => <Button key={x} title={x}/>)}
        </KeyGridOperations>
      </ControlPanelStyled>
    )
  }
}

const mapStateToProps = state => ({
  expression: state.display.expression,
})

const mapDispatchToProps = {
  addToDisplay,
  removeAllFromDisplay,
  removeOneFromDisplay,
  computeExpression,
  addHistory,
}

export default connect(mapStateToProps, mapDispatchToProps)(KeyPad)
