import React, { Component }from 'react'
import { Button } from 'react-bootstrap'

const WhiteButton = (props) => {
  return (
    <div>
      <style>
        {`                
            .btn-white{
                background-color: #FFFFFF;
                border-color: #979797;
                border-radius: 0;
                color: #45A6D7;
                font-weight: 200;
                letter-spacing: 0.05em;
                font-family: 'Montserrat-Bold', sans-serif;
                margin-bottom: 4%;
                padding-left: 8%;
                padding-right: 8%;
                width: 305px;
                font-size: 10pt;
              }
          `}
      </style>
      <Button variant='white' size='lg' onClick={(event) => { props.Show(); props.Hide() }}>
        {props.buttonText}
      </Button>
    </div>
  )
}

export default WhiteButton
