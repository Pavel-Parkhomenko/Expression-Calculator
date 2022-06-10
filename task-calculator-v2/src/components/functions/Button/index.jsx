import React from 'react'
import { ButtonStyled } from "@/components/Styles/stylesButton"

export function Button ({ title }) {
  return (
    <ButtonStyled>
      {title}
    </ButtonStyled>
  )
}
