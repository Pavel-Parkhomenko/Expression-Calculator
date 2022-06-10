import styled from 'styled-components'

const commonStyles = `
 width: 20%;
 height: 50px;
 border-radius: 5px;
 `

export const SettingsStyled = styled.div`
  margin: 5% 0 0 5%;

  h4 {
    margin-top: 3%;
  }

  select {
    margin-bottom: 10px;
    ${commonStyles}
  }

  h2 {
    font-size: 2.5em;
  }
`

export const Button = styled.button`
  cursor: pointer;
  :hover{
    background-color: #fff3e4;
  }
  ${commonStyles}
`
