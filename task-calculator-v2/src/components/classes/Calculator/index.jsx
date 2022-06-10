import React from 'react'
import Display from "@/components/classes/Display"
import History from "@/components/classes/History"
import KeyPad from "@/components/classes/KeyPad"
import {FlexColumnStyled, FlexRowStyled} from "@/components/Styles/stylesCalculator"

export class Calculator extends React.Component{
  render(){
    return(
      <FlexRowStyled>

        <FlexColumnStyled>
          <Display/>
          <KeyPad/>
        </FlexColumnStyled>

        <History/>

      </FlexRowStyled>
    )
  }
}
