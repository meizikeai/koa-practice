import React, { Component } from 'react'
import { createRoot } from 'react-dom/client'
import PropTypes from 'prop-types'
import './index.css'

let popupMinLayerScrollTop = 0

class PopupMinLayer extends Component {
  constructor(props) {
    super(props)
    const { show } = this.props
    this.state = {
      show,
    }
  }

  render() {
    const { show } = this.state
    const { content, height, layer, model } = this.props
    return (
      <div className='model-mini-layer' style={{ display: show ? null : 'none' }}>
        <div className='layer'>
          <div className='content'>{content}</div>
        </div>
        {layer ? (
          <div className={model ? 'layer-back white' : 'layer-back black'} style={{ height: `${height}px` }} />
        ) : (
          ''
        )}
      </div>
    )
  }
}

PopupMinLayer.propTypes = {
  content: PropTypes.string,
  height: PropTypes.number,
  layer: PropTypes.bool,
  model: PropTypes.bool,
  node: PropTypes.object,
  show: PropTypes.bool,
}

PopupMinLayer.defaultProps = {
  content: '',
  layer: true,
  model: true,
  show: true,
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
  popupMinLayerScrollTop = getScrollTop()

  const toastNode = document.querySelector('.toast-model-mini')

  document.documentElement.style.overflow = 'hidden'
  document.body.style.overflow = 'hidden'

  if (toastNode) {
    toastNode.addEventListener(
      'touchmove',
      (event) => {
        event.preventDefault()
      },
      false
    )
  }
}

function restartScroll() {
  const toastNode = document.querySelector('.toast-model-mini')
  const marker = document.querySelector('.toast-marker')
  if (!marker) {
    document.documentElement.style.overflow = 'inherit'
    document.body.style.overflow = 'inherit'

    setScrollTop(popupMinLayerScrollTop)
  }

  if (toastNode) {
    toastNode.removeEventListener(
      'touchmove',
      (event) => {
        event.preventDefault()
      },
      false
    )
  }
}

function createToast() {
  const toast = document.createElement('div')
  toast.setAttribute('id', `toast-${Math.floor(Math.random() * 10000000)}`)
  toast.setAttribute('class', 'toast-model-mini')
  document.body.appendChild(toast)
  return toast
}

export default {
  show(options) {
    let { content, callback, duration, layer, model } = options
    const container = createToast()
    const root = createRoot(container)

    if (!duration) {
      duration = 2000
    } else if (typeof duration !== 'number') {
      duration = 2000
    }

    setTimeout(() => {
      restartScroll()

      root.unmount()
      container.remove()

      if (typeof callback === 'function') {
        callback()
      }
    }, duration)

    root.render(
      <PopupMinLayer
        content={content}
        height={document.body.clientHeight}
        layer={layer}
        model={model}
        node={container}
      />,
      document.body
    )

    disableScroll()
  },
}

// PopupMinLayer.show({
//   content: 'Good luck to you',
//   duration: 2000,
//   layer: false,
//   model: false,
//   callback: () => { },
// })
