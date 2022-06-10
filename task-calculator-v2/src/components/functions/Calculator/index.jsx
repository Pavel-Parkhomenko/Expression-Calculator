import React from 'react'
import { Display } from "@/components/functions/Display"
import { History } from "@/components/functions/History"
import { KeyPad } from "@/components/functions/KeyPad"
import { FlexColumnStyled, FlexRowStyled } from "@/components/Styles/stylesCalculator"

export function Calculator () {
  return (
    <FlexRowStyled>
      <FlexColumnStyled>
        <Display />
        <KeyPad />
      </FlexColumnStyled>
      <History />
    </FlexRowStyled>
  )
}
