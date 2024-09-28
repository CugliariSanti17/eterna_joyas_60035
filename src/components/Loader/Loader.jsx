import React from 'react'
import Spinner from 'react-bootstrap/Spinner';
import "./Loader.css"

function Loader() {
  return (
    <div className='spinnerContainer'>
      <Spinner className="spinner" animation="border" role="status" />
    </div>
  );
}

export default Loader;

