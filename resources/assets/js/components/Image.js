import React from 'react'
import logo from './public/img/logo/donateABLE-square-colour-500.png'
import './bootstrap' 

function Image () {
  // Returning the logo to the top level file
  return <img src={logo} class='img-fluid' alt='Logo' />
}

export default Image
