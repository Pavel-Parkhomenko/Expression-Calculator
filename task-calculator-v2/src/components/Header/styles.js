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
  color: burlywood;
  text-decoration: none;

  :hover{
    color: white;
  }

  :last-child{
    margin-left: 10px;
  }
`

export const Title = styled.h3`
  color: white;
  margin-left: 10px;
`
export const Menu = styled.div`
  margin-right: 5%;
  color: wheat;
`
