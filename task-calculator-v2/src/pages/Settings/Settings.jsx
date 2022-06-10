import React from 'react'
import {Header} from "@/components/Header"
import {Button, SettingsStyled} from "@/pages/Settings/components"
import {changeTheme} from "@/redux/themeSlice"
import {clearHistory} from '@/redux/historySlice'
import {THEME_DARK, THEME_LIGHT} from "@/constants"

export default class Settings extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
  }

  handleClearHistory = () => {
    this.props.dispatch(clearHistory())
  }

  handleChangeTheme = event => {
    this.props.dispatch(changeTheme(event.target.value))
  }

  render() {
    return (
      <React.Fragment>
        <Header/>
        <SettingsStyled>
          <h2>Settings</h2>
          <h4>Switch Theme</h4>

          <select onChange={this.handleChangeTheme} defaultValue={this.props.theme}>
            <option value={THEME_LIGHT}>light</option>
            <option value={THEME_DARK}>dark</option>
          </select>

          <div>
            <Button onClick={this.handleClearHistory}>Clear All History</Button>
          </div>

        </SettingsStyled>
      </React.Fragment>
    )
  }
}
