import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from './appActions'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <button onClick={this.props.incrementAsync}>Increment after 1 second</button>
        <button onClick={this.props.increment}>Increment immediately</button>
        <button onClick={this.props.decrementAsync}>Decrement after 1 second</button>
        <button onClick={this.props.decrement}>Decrement immediately</button>
        <hr />
        <div>Clicked: {this.props.count} times</div>
      </div>
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
    increment: Actions.increment,
    incrementAsync: Actions.incrementAsync,
    decrement: Actions.decrement,
    decrementAsync: Actions.decrementAsync
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(App);