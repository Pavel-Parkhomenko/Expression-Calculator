import React from 'react'
import {ButtonStyled, HistoryInfoStyled, HistoryStyled, TitleStyled} from "@/components/Styles/stylesHistory"
import {connect} from 'react-redux'

class History extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpenHistory: false,
    }
  }

  handleHistory = () => {
    this.setState(state => {
      return {isOpenHistory: !state.isOpenHistory}
    })
  }

  render() {
    return (
      <HistoryStyled>
        <TitleStyled>History</TitleStyled>
        <ButtonStyled onClick={this.handleHistory}>
          history
        </ButtonStyled>
        {this.state.isOpenHistory
          ? this.props.history.map((item, ind) => <HistoryInfoStyled key={ind}>{item}</HistoryInfoStyled>)
          : null
        }
      </HistoryStyled>
    )
  }
}

const mapStateToProps = state => ({
  history: state.history.history,
})

export default connect(mapStateToProps)(History)
