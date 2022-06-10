import styled from 'styled-components'

export const DisplayStyled = styled.div`
  border-bottom: 3px solid gray;
  height: 100px;
  font-size: 50px;
  display: flex;
  align-items: center;
  justify-content: right;
  padding-right: 5px;

  @media screen and (max-width: 700px){
    font-size: 25px;
    height: 60px;
}
`
