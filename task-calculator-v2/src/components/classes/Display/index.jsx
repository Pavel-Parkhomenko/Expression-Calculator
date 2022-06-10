import React from 'react'
import {connect} from 'react-redux'

class Display extends React.Component {
  render() {
    return (
      <h2>
        display
      </h2>
    )
  }
}

const mapStateToProps = state => ({
  display: state.display.display,
})

export default connect(mapStateToProps)(Display)


