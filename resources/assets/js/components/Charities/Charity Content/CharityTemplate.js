import React from 'react'
import { Container } from 'react-bootstrap'
import NavLink from 'react-bootstrap/NavLink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'

const CharityTemplate = (props) => {
  return (
    <div>
      <style>
        {`
          .container{
            font-weight: 400;
            width: 100%;
            text-align: right;
          }

          .nav-link {
            color: white !important;
          }
        `}
      </style>
      <Container style={{backgroundColor: '#26607D'}}>
        <NavLink to='/charities'>
          Return to Charities
        </NavLink>
      </Container>
{/*
      <Container> 
      
        {props.charityImage}
        {props.charityText}
      </Container>

      <Container>
        {props.twitterLink}
        {props.facebookLink}
        {props.siteLink}
      </Container>

      <Container> 
          
      </Container> */}
    </div>
  )
}

export default CharityTemplate
