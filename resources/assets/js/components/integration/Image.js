import React from 'react'
import logo from './public/img/donateABLE-square-colour-500.png'
import '/Users/administrator/dev/donate-mobile/node_modules/bootstrap/dist/css/bootstrap.min.css'

function Image () {
  // Returning the logo to the top level file
  return <img src={logo} class='img-fluid' alt='Logo' />
}

export default Image
