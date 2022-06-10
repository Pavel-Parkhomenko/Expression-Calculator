import React from 'react'

import {HeaderDiv, LinkStyled, Menu, Title} from './styles'
import {HOME_CLASSES_PAGE_ROUTE, HOME_PAGE_ROUTE, SETTINGS_PAGE_ROUTE} from "@/constants"

export function Header () {
  return (
    <HeaderDiv>
      <Title>
        Calculator App
      </Title>
      <Menu>
        <LinkStyled to={HOME_PAGE_ROUTE}>Home F</LinkStyled>
        <LinkStyled to={HOME_CLASSES_PAGE_ROUTE}>Home C</LinkStyled>
        <LinkStyled to={SETTINGS_PAGE_ROUTE}>Settings</LinkStyled>
      </Menu>
    </HeaderDiv>
  )
}
