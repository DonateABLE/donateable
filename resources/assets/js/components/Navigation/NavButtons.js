import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

/* This the component for the Buttons that will be renedered in the Nav bar */

class LoginButtons extends Component {
  render () {
    return (
      <div> 
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
        
                  .btn-login{
                    background-color: #FFFFFF;
                    border-color: #979797;
                    border-radius: 0;
                    color: #26607D;
                    font-weight: 200;
                    letter-spacing: 0.05em;
                    font-family: 'Montserrat-Bold', sans-serif;
                    margin-bottom: 5px;
                    margin-top: 20px;
                    width: 305px;
                    height: 48px;
                    font-size: 10pt;
                  }
          `}
        </style>
        <NavLink to='/login'>
          <Button variant='login' size='lg'>LOG IN</Button>
        </NavLink>
        <NavLink to='/login'>
          <Button variant='turqdark' size='lg'>SIGN UP</Button>
        </NavLink>
      </div>
    )
  }
}

export default LoginButtons
