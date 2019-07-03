import React, { Component } from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'

// This component is for the collection of buttons that pull down
// in the hamburger menu

class ButtonGrouping extends Component {
  render () {
    return (
      <div className='text-center'>
        <style className='text/css'>
          {`                 
                   .btn-turq {
                    background-color: #45A6D7;
                    border-color: #979797;
                    border-radius: 0;
                    color: white;
                    vertical-align: middle;
                    font-weight: 100;
                    letter-spacing: 0.05em;
                    font-family: 'Montserrat-Bold', sans-serif;
                    width: 305px;
                    height: 48px;
                    font-size: 10pt;
                  }
          `}
        </style>
        <ButtonGroup vertical>
          <Button variant='turq' size='lg'>HOME</Button>
          <Button variant='turq' size='lg'>ABOUT</Button>
          <Button variant='turq' size='lg'>HOW IT WORKS</Button>
          <Button variant='turq' size='lg'>CHARITIES</Button>
          <Button variant='turq' size='lg'>PRIVACY POLICY</Button>
          <Button variant='turq' size='lg'>CONTACT</Button>
          <Button variant='turq' size='lg'>FAQ</Button>
          <Button variant='turq' size='lg'>TAKE A TOUR</Button>
        </ButtonGroup>
      </div>
    )
  }
}

export default ButtonGrouping
