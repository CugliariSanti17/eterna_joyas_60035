import React from 'react'
import Spinner from 'react-bootstrap/Spinner'

const Loader = () => {
  return (
    <div className='spinnerContainer'>
        <Spinner className='spinner' animation="border"/>
    </div>
  )
}

export default Loader