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
          }
        `}
      </style>
      <Container style={{color: 'white'}}>
        <NavLink to='/charities'>
        Return to Charities
        </NavLink>
        Hello World this is some example text that I am using.
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
