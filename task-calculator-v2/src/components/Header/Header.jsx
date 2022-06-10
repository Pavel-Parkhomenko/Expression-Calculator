import React from 'react'

import {HeaderDiv, LinkStyled, Menu, Title} from './components'
import {HOME_PAGE_ROUTE, SETTINGS_PAGE_ROUTE} from "@/constants"

export default () => {
  return (
    <HeaderDiv>
      <Title>
        Calculator App
      </Title>
      <Menu>
          <LinkStyled to={HOME_PAGE_ROUTE}>Home</LinkStyled>
          <LinkStyled to={SETTINGS_PAGE_ROUTE}>Settings</LinkStyled>
      </Menu>
    </HeaderDiv>
  )
}
