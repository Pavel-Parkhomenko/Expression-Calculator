import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const HeaderDiv = styled.div`
  background-color: ${({theme}) => theme.bgColor.dark};
  height: ${({theme}) => theme.size.xs + 20}px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`

export const LinkStyled = styled(Link)`
  font-size: ${({theme}) => theme.fontSizes[3]}px;
  color: ${props => props.active === 'true' ? '#fff' : '#8b867f'};
  text-decoration: ${props => props.active === 'true' ? 'outlined' : 'none'};

  :first-child {
    margin-right: ${({theme}) => theme.spaces[2]}px;
  }

  :last-child {
    margin-left: ${({theme}) => theme.spaces[2]}px;
  }

  :hover {
    color: ${({theme}) => theme.textColor.white};
  }
`

export const Title = styled.h1`
  color: ${({theme}) => theme.textColor.white};
  margin-left: ${({theme}) => theme.spaces[4]}px;
`
export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-right: ${({theme}) => theme.spaces[6]}px;
`
