import React from 'react'
import { Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import ButtonGrouping from '/Users/administrator/dev/OLD donateable/donateable/resources/assets/js/components/Navigation/ButtonGrouping'

function Buttons () {
  return (
    /* Custom styling for buttons, sizing and colors */
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
      <NavLink to='/charities' style={{ textDecoration: 'none' }}> 
        <Button variant='turqdark' className='row' size='lg'>
          SELECT YOUR CHARITY
        </Button>
      </NavLink>

      <Button variant='turqwhite' onClick={ButtonGrouping.handleShowTour} size='lg'>HOW IT WORKS</Button>
      <Button variant='turqwhite' onClick={ButtonGrouping.handleShowTour} size='lg'>TAKE A TOUR</Button>
      <Button variant='turq' size='lg'>CURRENTLY DONATING </Button>
      <Button variant='turq' size='lg'>DONATORS TO DATE</Button>
      <Button variant='turq' size='lg'>TOTAL HASHES 193 832</Button>
    </div>
  )
}

export default Buttons
