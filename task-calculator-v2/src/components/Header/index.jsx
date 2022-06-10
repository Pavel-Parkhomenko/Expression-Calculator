import React from 'react'
import { useLocation } from 'react-router'

import { HeaderDiv, LinkStyled, Menu, Title } from '../Styles/stylesHeader'
import { HOME_CLASSES_PAGE_ROUTE, HOME_PAGE_ROUTE, SETTINGS_PAGE_ROUTE } from "@/constants"

export function Header () {
  const { pathname } = useLocation()

  return (
    <HeaderDiv>
      <Title>
        Calculator App
      </Title>
      <Menu>
        <LinkStyled active={(pathname === HOME_PAGE_ROUTE).toString()}
                    to={HOME_PAGE_ROUTE}>Home F
        </LinkStyled>
        <LinkStyled active={(pathname === HOME_CLASSES_PAGE_ROUTE).toString()}
                    to={HOME_CLASSES_PAGE_ROUTE}>Home C
        </LinkStyled>
        <LinkStyled active={(pathname === SETTINGS_PAGE_ROUTE).toString()}
                    to={SETTINGS_PAGE_ROUTE}>Settings
        </LinkStyled>
      </Menu>
    </HeaderDiv>
  )
}
