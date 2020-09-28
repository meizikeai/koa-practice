import React, { Component } from 'react'
import 'whatwg-fetch'

import '../reset.css'

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
