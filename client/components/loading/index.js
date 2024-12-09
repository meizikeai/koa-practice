import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const Loading = (props) => {
  const { color } = props

  return (
    <div className='model-load'>
      <div key='notunique' style={color ? { backgroundColor: color } : ''} />
    </div>
  )
}

Loading.propTypes = {
  color: PropTypes.string,
}

export default Loading
