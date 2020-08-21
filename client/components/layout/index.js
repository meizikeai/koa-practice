import React, { Component } from 'react'
import 'node-fetch'

import '../reset/index.css'

class Layout extends Component {
  constructor () {
    super()
    this.state = {}
  }

  render () {
    const { children } = this.props
    return (
      <React.Fragment>
        {children}
      </React.Fragment>
    )
  }
}

export default Layout
