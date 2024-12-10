// PopupCustomLayer.show({
//   content: (
//     <div className='pop-box'>
//       <div className='content'>
//         <div>{tips}</div>
//       </div>
//       <div className='close'></div>
//     </div>
//   ),
//   handler: () => {
//     let close = document.querySelector('.pop-box .close')
//     close.addEventListener('click', () => {
//       PopupCustomLayer.hide()
//     })
//   },
// })

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import './index.css'

let popupCustomLayerScrollTop = 0

class PopupCustomLayer extends Component {
  constructor(props) {
    super(props)
    const { show } = this.props
    this.state = {
      show,
    }
  }

  componentDidMount() {
    const { handler } = this.props
    if (typeof handler === 'function') {
      handler()
    }
  }

  render() {
    const { show } = this.state
    const { content, height, layer } = this.props
    return (
      <div className='model-custom-layer' style={{ display: show ? null : 'none' }}>
        <div className='layer'>{content}</div>
        {layer ? <div className='layer-back' style={{ height: `${height}px` }} /> : ''}
      </div>
    )
  }
}

PopupCustomLayer.propTypes = {
  show: PropTypes.bool,
  content: PropTypes.node,
  layer: PropTypes.bool,
  handler: PropTypes.func,
  node: PropTypes.object,
  height: PropTypes.number,
}

PopupCustomLayer.defaultProps = {
  show: true,
  content: '',
  layer: true,
}

const getScrollTop = () => {
  const total = document.body.scrollTop + document.documentElement.scrollTop
  return parseInt(total, 10)
}

const setScrollTop = (top) => {
  document.body.scrollTop = top
  document.documentElement.scrollTop = top
}

function disableScroll() {
  popupCustomLayerScrollTop = getScrollTop()

  // const toastNode = document.querySelector('.toast-model-custom')

  document.documentElement.style.overflow = 'hidden'
  document.body.style.overflow = 'hidden'

  // if (toastNode && !scroll) {
  //   toastNode.addEventListener('touchmove', event => {
  //     event.preventDefault()
  //   }, false)
  // }
}

function restartScroll() {
  // const toastNode = document.querySelector('.toast-model-custom')

  document.documentElement.style.overflow = 'inherit'
  document.body.style.overflow = 'inherit'

  setScrollTop(popupCustomLayerScrollTop)

  // if (toastNode) {
  //   toastNode.removeEventListener('touchmove', event => {
  //     event.preventDefault()
  //   }, false)
  // }
}

function createToast() {
  const toast = document.createElement('div')
  toast.setAttribute('id', `toast-${Math.floor(Math.random() * 10000000)}`)
  document.body.appendChild(toast)
  toast.setAttribute('class', 'toast-marker toast-model-custom')
  return toast
}

export default {
  show(options) {
    const { content, duration, handler, layer, scroll } = options
    const toast = createToast()

    if (duration && typeof duration === 'number') {
      setTimeout(() => {
        restartScroll()

        ReactDOM.unmountComponentAtNode(toast)
        document.body.removeChild(toast)
      }, duration)
    }

    ReactDOM.render(
      <PopupCustomLayer
        content={content}
        confirm={confirm}
        handler={handler}
        height={document.body.clientHeight}
        layer={layer}
        node={toast}
      />,
      toast
    )

    disableScroll(scroll)
  },
  hide() {
    // console.log(document.querySelector('.toast-model-custom'))
    restartScroll()
    document.body.removeChild(document.querySelector('.toast-model-custom'))
  },
}
