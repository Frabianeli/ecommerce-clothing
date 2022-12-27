import React from 'react'
import './styles/loading.css'

const Loading = () => {

    //LOADING.io
    
  return (
    <div className='container-loading'>
      <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
      </div>
    </div>
  )
}

export default Loading