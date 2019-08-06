import React from 'react'
import {Container, Card, Button} from 'react-bootstrap'
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
            margin-bottom: 3%;
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
            margin-bottom: 3%;
            height:
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
            margin-block-start: 0.5em;
            margin-block-end: 0.5em;
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
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
          <Button variant='donating'>Currently Donating</Button>
          <Button variant='donators'>Donators to Date</Button>
          <Button variant='social'>
            <ul className='floating-social-icons'>
              <li>
                <FontAwesomeIcon icon={faFacebookF} />
              </li>
              <li>
                <FontAwesomeIcon icon={faTwitter} />
              </li>
              <li>
                <FontAwesomeIcon icon={faGlobe} />
              </li>
            </ul>
          </Button>
          <Button variant='donatehere'>Donate Here</Button>
        </Card.Body>
      </Card>
    </div>

  )
}

export default CharityCards
