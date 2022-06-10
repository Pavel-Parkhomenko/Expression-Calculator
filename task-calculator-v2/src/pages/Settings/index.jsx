import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import {clearHistory} from "@/redux/historySlice"
import {changeTheme} from "@/redux/themeSlice"
import {Button, SettingsStyled} from "../Styles/stylesSettings"
import {THEME_DARK, THEME_LIGHT} from "@/constants"
import {Header} from "@/components/Header"

export function Settings () {

  const dispatch = useDispatch()
  const theme = useSelector(state => state.theme.theme)

  const handleClearHistory = () => {
    dispatch(clearHistory())
  }

  const handleChangeTheme = event => {
    dispatch(changeTheme(event.target.value))
  }

  return (
    <React.Fragment>
      <Header/>
      <SettingsStyled>
        <h2>Settings</h2>
        <h4>Switch Theme</h4>
        <select onChange={handleChangeTheme} defaultValue={theme}>
          <option value={THEME_LIGHT}>light</option>
          <option value={THEME_DARK}>dark</option>
        </select>
        <div>
          <Button onClick={handleClearHistory}>Clear All History</Button>
        </div>
      </SettingsStyled>
    </React.Fragment>
  )
}
