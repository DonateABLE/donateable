import React from 'react'
import { Container, Row } from 'react-bootstrap';

const TwoItems = (props) => {
  return (
    <div>
      <Container>
        <Row>
          <img src={props.imgSrc} style={{height: 'auto'}} className='col-6'/>
          <h2 style={{ fontSize: 18, color: '#FFFFFF'}} className="col-6">{props.text}</h2>
        </Row>
      </Container>
    </div>
  )
}

export default TwoItems