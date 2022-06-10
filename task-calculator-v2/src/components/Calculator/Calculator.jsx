import React from 'react'
import {FlexColumnStyled, FlexRowStyled} from "@/components/Calculator/components"
import {Display} from "@/components/Display"
import {History} from "@/components/History"
import {KeyPad} from "@/components/KeyPad"


export function Calculator () {
  return (
    <FlexRowStyled>

      <FlexColumnStyled>
        <Display/>
        <KeyPad/>
      </FlexColumnStyled>

      <History/>

    </FlexRowStyled>
  )
}
