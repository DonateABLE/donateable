import React from 'react'

// The Following returns some basic text as a SFC to Main

const ModalText = (props) => {
  return  (
    <div>
      <h1 style={{marginBottom: 0, marginTop: 10, 
        fontSize: 14, color: 'white'}}>{props.text1}</h1>
      <h2 style={{fontSize: 14}}>{props.text2}</h2>
    </div>
  )
}

export default ModalText