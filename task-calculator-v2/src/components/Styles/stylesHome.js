import styled from 'styled-components'

export const Card = styled.div`
  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.colors.bgColor};

  border-radius: 32px;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: ${({ theme }) => theme.spaces[4]}px;
`
