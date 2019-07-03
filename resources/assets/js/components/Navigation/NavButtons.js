import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

/* This the component for the Buttons that will be renedered in the Nav bar */

class LoginButtons extends Component {
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
                    margin-bottom: 6px;
                    width: 305px;
                    height: 48px;
                    font-size: 10pt;
                  }
        
                  .btn-turqdark{
                    background-color: #26607D;
                    border-color: #979797;
                    border-radius: 0;
                    color: white;
                    vertical-align: middle;
                    font-weight: 200;
                    letter-spacing: 0.05em;
                    font-family: 'Montserrat-Bold', sans-serif;
                    margin-bottom: 5px;
                    width: 305px;
                    height: 48px;
                    font-size: 10pt;
                  }
        
                  .btn-turqwhite{
                    background-color: #FFFFFF;
                    border-color: #979797;
                    border-radius: 0;
                    color: #26607D;
                    font-weight: 200;
                    letter-spacing: 0.05em;
                    font-family: 'Montserrat-Bold', sans-serif;
                    margin-bottom: 5px;
                    width: 305px;
                    height: 48px;
                    font-size: 10pt;
                  }
          `}
        </style>
        <Button variant='turqwhite' className='row' size='lg'>LOG IN</Button>
        <Button variant='turqdark' className='row' size='lg'>SIGN UP</Button>
      </div>
    )
  }
}

export default LoginButtons
