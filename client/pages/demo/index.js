import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { createRoot } from 'react-dom/client'

import Layout from '../../components/layout/index.js'
import PopupMinLayer from '../../components/popup-min-layer/index.js'
import PopupLayer from '../../components/popup-layer/index.js'
import PopupCustomLayer from '../../components/popup-custom-layer/index.js'

import './index.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { one: 0, two: 0, three: 0 }
  }

  componentDidMount() {
    fetch('/json')
      .then((response) => response.json())
      .then((res) => {
        console.log(res)
      })
  }

  handleClickOne = () => {
    const { one } = this.state

    PopupMinLayer.show({ content: 'I also want to look for a girlfriend...' })

    this.setState({
      one: one + 1,
    })
  }

  handleClickTwo = () => {
    const { two } = this.state

    PopupLayer.show({
      layer: true,
      confirm: true,
      content: 'Good luck to you!',
    })

    this.setState({
      two: two + 1,
    })
  }

  handleClickThree = () => {
    const { three } = this.state

    PopupCustomLayer.show({
      content: (
        <div className='pop-box'>
          <div className='content'>
            <div>custom popup</div>
          </div>
          <div className='close'>OK</div>
        </div>
      ),
      handler: () => {
        let close = document.querySelector('.pop-box .close')
        close.addEventListener('click', () => {
          PopupCustomLayer.hide()
        })
      },
    })

    this.setState({
      three: three + 1,
    })
  }

  mainContent = () => {
    const { one, two, three } = this.state

    return (
      <div className='demo'>
        <h1 key='1'>Hello Demo!</h1>
        <p key='2'>Welcome to Demo!</p>
        <button key='32' type='button' onClick={this.handleClickOne}>
          Click min layer ({one})
        </button>
        <button key='32' type='button' onClick={this.handleClickTwo}>
          Click layer ({two})
        </button>
        <button key='32' type='button' onClick={this.handleClickThree}>
          Click custom layer ({three})
        </button>
      </div>
    )
  }

  render() {
    return (
      <div className='wrapper'>
        <Layout>{this.mainContent()}</Layout>
      </div>
    )
  }
}

const root = createRoot(document.querySelector('#app'))

root.render(<App />)

App.propTypes = {
  device: PropTypes.bool,
}

export default App
