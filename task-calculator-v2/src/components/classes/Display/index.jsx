import React from 'react'
import {connect} from 'react-redux'
import {DisplayStyled} from "@/components/Styles/stylesDisplay"

class Display extends React.Component {
  render() {
    return (
      <DisplayStyled>
        {this.props.display}
      </DisplayStyled>
    )
  }
}

const mapStateToProps = state => ({
  display: state.display.display,
})

export default connect(mapStateToProps)(Display)


