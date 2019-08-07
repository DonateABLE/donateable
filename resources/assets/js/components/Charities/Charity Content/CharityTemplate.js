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
          .conatiner{
            color: #26607D;
            font-size: 14;
            font-weight: 400;
            width: 100%;
            height: 50px;
          }
        `}
      </style>
      <Container>
        <NavLink to='/charities'>
        Return to Charities
        </NavLink>
      </Container>

      <Container> 
        {/* DO GRID STUFF HERE,  could be its own component*/}
        {props.charityImage}
        {props.charityText}
      </Container>

      <Container>
        {props.twitterLink}
        {props.facebookLink}
        {props.siteLink}
      </Container>

      <Container> {/* BIG WHITE CONTAINER */}
          
      </Container>
    </div>
  )
}

export default CharityTemplate
