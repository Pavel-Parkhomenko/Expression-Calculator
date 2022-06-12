import styled from 'styled-components'

export const HistoryStyled = styled.div`
  border-left: 3px solid gray;
  width: 20%;
  display: flex;
  flex-direction: column;
  padding-left: ${({ theme }) => theme.spaces[1]}px;
`

export const TitleStyled = styled.h3`
  color: ${({ theme }) => theme.colors.textColor};
  margin-bottom: ${({ theme }) => theme.spaces[1]}px;
  cursor: pointer;

  :hover{
    color: ${({ theme }) => theme.colors.hoverColor};
  }
`

export const ButtonStyled = styled.button`
  margin-bottom: ${({ theme }) => theme.spaces[1]}px;
  width: 50%;
`

export const HistoryInfoStyled = styled.p`
  margin-bottom: ${({ theme }) => theme.spaces[1]}px;
`
