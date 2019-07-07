import React from 'react'

const TwoItems = (props) => {
  return (
    <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
      <img src={props.imgSrc} style={{flex: '0 32%', height: '40px', marginBottom: '2%'}} />
      <h2 style={{flex: '0 32%', height: '40px', marginBottom: '2%'}}>{props.text}</h2>
    </div>
  )
}

export default TwoItems