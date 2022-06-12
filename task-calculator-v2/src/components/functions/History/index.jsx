import React, { useState } from 'react'
import { useSelector } from "react-redux"
import { HistoryInfoStyled, HistoryStyled, TitleStyled } from "@/components/Styles/stylesHistory"

export function History() {
  const history = useSelector(state => state.history.history)
  const [isOpenHistory, setIsOpenHistory] = useState(false)

  const handleHistory = () => {
    setIsOpenHistory(!isOpenHistory)
  }

  return (
    <HistoryStyled>
      <TitleStyled onClick={handleHistory}>
        {isOpenHistory ? "History open" : "History close"}
      </TitleStyled>
      {isOpenHistory
        ? history.map((item, ind) => <HistoryInfoStyled key={ind}>{item}</HistoryInfoStyled>)
        : null
      }
    </HistoryStyled>
  )
}
