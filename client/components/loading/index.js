import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

const Loading = (props) => {
  const { color } = props

  return (
    <div className='model-load'>
      <div style={color ? { backgroundColor: color } : ''} />
    </div>
  )
}

Loading.propTypes = {
  color: PropTypes.string,
}

export default Loading
