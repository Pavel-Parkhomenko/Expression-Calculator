import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderDiv = styled.div`
  background-color: #434343;
  height: 70px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`

export const LinkStyled = styled(Link)`
  font-size: 19px;
  color: ${props => props.active === 'true' ? '#fff' : '#8b867f'};
  text-decoration: ${props => props.active === 'true' ? 'outlined' : 'none'};

  :first-child {
    margin-right: 5px;
  }

  :last-child {
    margin-left: 5px;
  }

  :hover {
    color: white;
  }
`

export const Title = styled.h1`
  color: white;
  margin-left: 10px;
`
export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-right: 30px;
`
