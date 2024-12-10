import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom/client'

import Layout from '../../components/layout/index.js'
import PopupMinLayer from '../../components/popup-min-layer/index.js'

import './index.css'

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
      <div className='demo'>
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
    // const { device } = this.props

    return (
      <div className='wrapper'>
        <Layout>{this.mainContent()}</Layout>
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.querySelector('#app'))

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

App.propTypes = {
  device: PropTypes.bool,
}

export default App
