import React from 'react'
import { HistoryInfoStyled, HistoryStyled, TitleStyled } from "@/components/Styles/stylesHistory"
import { connect } from 'react-redux'

class History extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpenHistory: false,
    }
  }

  handleHistory = () => {
    this.setState(state => {
      return { isOpenHistory: !state.isOpenHistory }
    })
  }

  render() {
    return (
      <HistoryStyled>
        <TitleStyled onClick={this.handleHistory}>
          {this.state.isOpenHistory ? "History open" : "History close"}
        </TitleStyled>
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
