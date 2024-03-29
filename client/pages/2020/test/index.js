import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { hydrate } from 'react-dom'

import device from '../../../utils/get-device'
import Layout from '../../../components/layout'
import LayoutPC from '../../../components/layout-pc'
import PopupMinLayer from '../../../components/popup-min-layer'

import './index.scss'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { index: 0 }
  }

  componentDidMount() {
    fetch('/json')
      .then((response) => response.json())
      .then((res) => {
        console.log(res)
      })
  }

  handleClick = () => {
    const { index } = this.state

    PopupMinLayer.show({ content: 'I also want to look for a girlfriend...' })

    this.setState({
      index: index + 1,
    })
  }

  mainContent = () => {
    const { index } = this.state

    return (
      <div className={`${device ? 'demo-pc' : 'demo'}`}>
        <h1 key='1'>Hello Demo!</h1>
        <p key='2'>Welcome to Demo!</p>
        <div key='3' className='click'>
          You clicked
          <span key='31'>{index}</span>
          times
        </div>
        <button key='32' type='button' onClick={this.handleClick}>
          Click me
        </button>
      </div>
    )
  }

  render() {
    const { device } = this.props

    return (
      <div className='wrapper'>
        {device ? <LayoutPC>{this.mainContent()}</LayoutPC> : <Layout>{this.mainContent()}</Layout>}
      </div>
    )
  }
}

if (typeof window !== 'undefined') {
  const config = window.CONFIG || {}
  hydrate(<App {...config} />, document.querySelector('#app'))
}

App.propTypes = {
  device: PropTypes.bool,
}

module.exports = App
