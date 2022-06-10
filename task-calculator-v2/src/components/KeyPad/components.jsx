import styled from 'styled-components'

const commonStyles = {
  display: "grid",
  gridTemplateRows: "1fr 1fr 1fr 1fr",
  gridTemplateColumns: "1fr 1fr 1fr",
  width: "100%",
  gridRowGap: "10px",
  justifyItems: 'center',
}

export const KeyGridNumber = styled.div`
  ${commonStyles};

  & > button:last-child{
    width: ${500 / 6}%;
    grid-area: 4 / 1 / 5 / 4;
  }
`

export const KeyGridOperations = styled.div`
  ${commonStyles};

  & > button:last-child{
    width: ${300 / 4}%;
    grid-area: 4 / 2 / 5 / 4;
  }
`

export const ControlPanelStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-left: 10%;
  margin-top: 3%;


  @media screen and (max-width: 700px){
    flex-direction: column;
    & >:last-child{
      margin-top: 10px;
    }
    button{
      width: 50%;
      height: 50px;
      font-size: 1em;
    }
  }
`
