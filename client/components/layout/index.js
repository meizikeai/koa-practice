import React, { Component } from 'react'
import PropTypes from 'prop-types'
import 'whatwg-fetch'

import '../reset.css'

class Layout extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    const { children } = this.props
    return <React.Fragment>{children}</React.Fragment>
  }
}

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
