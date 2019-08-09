import React from 'react'
import { Card, Button } from 'react-bootstrap'
import NavLink from 'react-bootstrap/NavLink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

const CharityCards = (props) => {
  return (
    <div>
      <style>
        {`
          .btn-donating {
            color: #fff;
            background-color: #45a6d7;
            border-color: #45a6d7;
            width: 100%;
            margin-top: 8%;
          }

          .btn-donators {
            color: #fff;
            background-color: #26607d;
            border-color: #26607d;
            width: 100%;
          }
          
          .btn-social {
            color: #fff;
            background-color: #45a6d7;
            border-color: #45a6d7;
            width: 100%;
          }
          
          .btn-donatehere {
            color: #fff;
            background-color: #26607d;
            border-color: #26607d;
            height: 60px;
            font-size: 18px;
            width: 100%;
          }

          .card {
            margin-bottom: 5%;
          }

          .floating-social-icons{
            margin-block-start: 0.1em;
            margin-block-end: 0.1em;
            margin-inline-start: 0px;
            margin-inline-end: 0px;
            padding-inline-start: 40px;
          }
        `}
      </style>
      <Card className='text-center'>
        <img src={props.image} className='img-fluid' />
        <Card.Header>{props.charityName}</Card.Header>
        <Card.Body>
          <Button variant='donating'>Currently Donating</Button>
          <Button variant='donators'>Donators to Date</Button>
          <Button variant='social' style={{ paddingTop: '0', paddingBottom: '0' }}>
            <ul className='floating-social-icons'>
              <li>
                <a href={props.facebookLink}>
                  <FontAwesomeIcon icon={faFacebookF}
                    style={{ color: 'white' }} />
                </a>
              </li>
              <li>
                <a href={props.twitterLink}>
                  <FontAwesomeIcon icon={faTwitter}
                    style={{ color: 'white' }} />
                </a>
              </li>
              <li>
                <a href={props.siteLink}>
                  <FontAwesomeIcon icon={faGlobe}
                    style={{ color: 'white' }} />
                </a>
              </li>
            </ul>
          </Button>
          <NavLink to={props.donateLink}>
            <Button variant='donatehere'>Donate Here</Button>
          </NavLink>
        </Card.Body>
      </Card>
    </div>

  )
}

export default CharityCards
