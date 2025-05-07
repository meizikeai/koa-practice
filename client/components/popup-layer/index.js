import React, { Component } from 'react'
import { createRoot } from 'react-dom/client'
import PropTypes from 'prop-types'
import './index.css'

let popupLayerScrollTop = 0

class PopupLayer extends Component {
  constructor(props) {
    super(props)
    const { show } = this.props
    this.state = {
      show,
    }
  }

  hide = () => {
    const { validate, cancel, root, container } = this.props

    restartScroll()
    this.setState({ show: false })

    if (typeof validate.callback === 'function') {
      root.unmount()
      container.remove()
      validate.callback()
    }

    if (typeof cancel.callback === 'function') {
      root.unmount()
      container.remove()
      cancel.callback()
    }
  }

  render() {
    const { show } = this.state
    const { title, content, height, confirm, validate, cancel, layer } = this.props
    return (
      <div className='model-large-layer' style={{ display: show ? null : 'none' }}>
        <div className='layer'>
          <div className='main'>
            <div className='header'>
              <div className='title'>{title}</div>
            </div>
            <div className='content'>{content}</div>
            {confirm && (
              <div className='footer'>
                <div className='validate' onClick={this.hide.bind(this)} role='presentation'>
                  {validate.txt}
                </div>
                <div className='cancel' onClick={this.hide.bind(this)} role='presentation'>
                  {cancel.txt}
                </div>
              </div>
            )}
            {!confirm && (
              <div className='footer'>
                <div className='validate' onClick={this.hide.bind(this)} role='presentation'>
                  {validate.txt}
                </div>
              </div>
            )}
          </div>
        </div>
        {layer ? <div className='layer-back' style={{ height: `${height}px` }} /> : ''}
      </div>
    )
  }
}

PopupLayer.propTypes = {
  show: PropTypes.bool,
  title: PropTypes.string,
  content: PropTypes.string,
  confirm: PropTypes.bool,
  layer: PropTypes.bool,
  cancel: PropTypes.object,
  validate: PropTypes.object,
  height: PropTypes.number,
  root: PropTypes.object,
  container: PropTypes.object,
}

PopupLayer.defaultProps = {
  show: true,
  title: 'Tips',
  content: '',
  confirm: false,
  layer: true,
  cancel: { txt: 'Cancel', callback: null },
  validate: { txt: 'OK', callback: null },
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
  popupLayerScrollTop = getScrollTop()

  document.documentElement.style.overflow = 'hidden'
  document.body.style.overflow = 'hidden'
}

function restartScroll() {
  document.documentElement.style.overflow = 'auto'
  document.body.style.overflow = 'auto'

  setScrollTop(popupLayerScrollTop)
}

function createToast() {
  const toast = document.createElement('div')
  toast.setAttribute('id', `toast-${Math.floor(Math.random() * 10000000)}`)
  toast.setAttribute('class', 'toast-marker toast-model-layer')
  document.body.appendChild(toast)
  return toast
}

export default {
  show(options) {
    const { title, content, duration, confirm, cancel, validate, layer } = options
    const container = createToast()
    const root = createRoot(container)

    if (duration && typeof duration === 'number') {
      setTimeout(() => {
        restartScroll()

        root.unmount()
        container.remove()
      }, duration)
    }

    root.render(
      <PopupLayer
        title={title}
        content={content}
        confirm={confirm}
        cancel={cancel}
        height={document.body.clientHeight}
        validate={validate}
        layer={layer}
        root={root}
        container={container}
      />,
      document.body
    )

    disableScroll()
  },
}

// PopupLayer.show({
//   layer: false,
//   confirm: true,
//   validate: {
//     txt: 'ok',
//     callback: () => {
//       // do something
//     },
//   },
//   content: 'Good luck to you',
// })
