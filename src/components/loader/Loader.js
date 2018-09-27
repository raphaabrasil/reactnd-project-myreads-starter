import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import './loader.css'

function Loader (props)  {
  const type = props.type
  return (
    <div className={`loader loader--${type}`}>
      <CircularProgress className="loader__spinner"  size={80} color="primary" />
    </div>
  )
}

export default Loader
