import React from 'react'
import {useSelector} from "react-redux"
import {HistoryInfoStyled, HistoryStyled, TitleStyled} from "@/components/Styles/stylesHistory"

export function History () {

  const history = useSelector(state => state.history.history)

  return (
    <HistoryStyled>
      <TitleStyled>History</TitleStyled>
      {history.length
        ? history.map((item, ind) => <HistoryInfoStyled key={ind}>{item}</HistoryInfoStyled>)
        : <h4>There is not history yet</h4>
      }
    </HistoryStyled>
  )
}
