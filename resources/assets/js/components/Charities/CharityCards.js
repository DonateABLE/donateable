import React from 'react'
import {Container, Card, Button} from 'react-bootstrap'

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
            width: 110%;
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
        `}
      </style>
      <Card className="text-center">
        <img src={props.image} className='img-fluid' />
        <Card.Header>{props.charityName}</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
          <Button variant='donating'>Currently Donating</Button>
          <Button variant='donators'>Donators to Date</Button>
          <Button variant='social'>Social Buttons</Button>
          <Button variant='donatehere'>Donate Here</Button>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    </div>

  )
}

export default CharityCards
