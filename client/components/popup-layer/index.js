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
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
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

  hide = (pass) => {
    const { validate, cancel } = this.props

    restartScroll()
    this.setState({ show: false })

    if (pass && typeof validate.callback === 'function') {
      validate.callback()
    }

    if (!pass && typeof cancel.callback === 'function') {
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
                <div className='validate' onClick={this.hide.bind(this, true)} role='presentation'>
                  {validate.txt}
                </div>
                <div className='cancel' onClick={this.hide.bind(this, false)} role='presentation'>
                  {cancel.txt}
                </div>
              </div>
            )}
            {!confirm && (
              <div className='footer'>
                <div className='validate' onClick={this.hide.bind(this, true)} role='presentation'>
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
  node: PropTypes.object,
  height: PropTypes.number,
}

PopupLayer.defaultProps = {
  show: true,
  title: '温馨提示',
  content: '',
  confirm: false,
  layer: true,
  cancel: { txt: '取消', callback: null },
  validate: { txt: '确定', callback: null },
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

  // const toastNode = document.querySelector('.toast-model-layer')

  document.documentElement.style.overflow = 'hidden'
  document.body.style.overflow = 'hidden'

  // if (toastNode) {
  //   toastNode.addEventListener('touchmove', event => {
  //     event.preventDefault()
  //   }, false)
  // }
}

function restartScroll() {
  // const toastNode = document.querySelector('.toast-model-layer')

  document.documentElement.style.overflow = 'auto'
  document.body.style.overflow = 'auto'

  setScrollTop(popupLayerScrollTop)

  // if (toastNode) {
  //   toastNode.removeEventListener('touchmove', event => {
  //     event.preventDefault()
  //   }, false)
  // }
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
    const toast = createToast()

    if (duration && typeof duration === 'number') {
      setTimeout(() => {
        restartScroll()

        ReactDOM.unmountComponentAtNode(toast)
        document.body.removeChild(toast)
      }, duration)
    }

    ReactDOM.render(
      <PopupLayer
        title={title}
        content={content}
        confirm={confirm}
        cancel={cancel}
        height={document.body.clientHeight}
        validate={validate}
        layer={layer}
        node={toast}
      />,
      toast
    )

    disableScroll()
  },
}
