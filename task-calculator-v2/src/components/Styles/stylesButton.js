import styled from 'styled-components'

export const ButtonStyled = styled.button`
  height: ${({ theme }) => theme.size.small - 10}px;
  width: ${({ theme }) => theme.size.small - 10}px;
  border-radius: ${({ theme }) => theme.spaces[3]}px;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes[4]}px;

  :hover {
    background-color: ${({ theme }) => theme.textColor.muted};
  }
`
