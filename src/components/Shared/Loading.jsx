import React from 'react'
import './styles/loading.css'

const Loading = ({screen, styleLoading}) => {

    //LOADING.io
    
  return (
    <div className={ screen ? 'container-loading container-loading-screen' : 'container-loading'} style={styleLoading} >
      <div className="lds-ring">
          <div style={styleLoading ? {borderColor: '#fff #fff #c5c5c5 #c5c5c5'} :{} }></div>
          <div></div>
          <div></div>
          <div></div>
      </div>
    </div>
  )
}

export default Loading