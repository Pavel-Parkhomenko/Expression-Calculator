import styled from 'styled-components'

export const DisplayStyled = styled.div`
  border-bottom: 3px solid gray;
  height: ${({ theme }) => theme.size.small}px;
  font-size: ${({ theme }) => theme.size.xs}px;
  display: flex;
  align-items: center;
  justify-content: right;
  padding-right: ${({ theme }) => theme.spaces[1]}px;

  @media screen and (max-width: 700px){
    font-size: ${({ theme }) => theme.size.xs / 2}px;
    height: ${({ theme }) => theme.size.small / 2}px;
}
`
