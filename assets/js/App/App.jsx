import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from './appActions'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    setInterval(this.props.increment, 2000);
  }

  render() {
    return (
        <h1> {this.props.count} </h1>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    count: state.counter
  }
}

const matchDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    increment: Actions.increment
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(App)