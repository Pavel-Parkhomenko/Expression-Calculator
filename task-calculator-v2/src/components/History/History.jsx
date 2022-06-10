import React from 'react'
import {HistoryInfoStyled, HistoryStyled, TitleStyled} from "./components"
import {useSelector} from "react-redux"

export default () => {

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
