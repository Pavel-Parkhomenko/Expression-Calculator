import styled from 'styled-components'

export const FlexColumnStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-right: ${({ theme }) => theme.spaces[3]}px;
`

export const FlexRowStyled = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: ${({ theme }) => theme.spaces[3]}px;
`
