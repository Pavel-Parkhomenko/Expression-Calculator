import React from 'react'
import { ButtonStyled } from "@/components/Styles/stylesButton"

export class Button extends React.Component{
  render(){
    return(
      <ButtonStyled>
        {this.props.title}
      </ButtonStyled>
    )
  }
}
