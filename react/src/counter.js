import React from 'react'
import { connect } from 'react-redux'

class Counter extends React.Component {
  increment = () => {
    this.props.dispatch({ type: 'INCREMENT' })
  }

  decrement = () => {
    this.props.dispatch({ type: 'DECREMENT' })
  }

  globalIncrement = () => {
    this.props.globalEventDistributor.dispatch({ type: 'INCREMENT' })
  }

  globalDecrement = () => {
    this.props.globalEventDistributor.dispatch({ type: 'DECREMENT' })
  }

  render() {
    return (
      <div>
        <h2>Home page from React.js</h2>
        <ul>
          <li>redux store count: {this.props.count}</li>
          <li>
            <button onClick={this.increment}>增加计数</button>
          </li>
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  }
}

export default connect(mapStateToProps)(Counter)
