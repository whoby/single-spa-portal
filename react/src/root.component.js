import React from 'react'
import { Provider, connect } from 'react-redux'
import Counter from './views/counter'

export default class Root extends React.Component {
  state = {
    store: this.props.store,
    globalEventDistributor: this.props.globalEventDistributor
  }

  componentDidCatch(error, info) {
    console.log(error, info)
  }

  render() {
    let ret = <div></div>

    if (this.state.store && this.state.globalEventDistributor) {
      ret = (
        <Provider store={this.state.store}>
          <Counter globalEventDistributor={this.state.globalEventDistributor} />
        </Provider>
      )
    }

    return ret
  }
}
