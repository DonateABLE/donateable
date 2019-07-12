import React from 'react'
import { Container, Row } from 'react-bootstrap';

const TwoItems = (props) => {
  return (
    <div>
      <Container>
        <Row>
          <img src={props.imgSrc} style={{height: '100%', paddingTop: '8%'}} className='col-6' />
          <h2 style={{ fontSize: '1.2em', color: '#FFFFFF', paddingTop: '8%'}} className="col-6">{props.text}</h2>
        </Row>
      </Container>
    </div>
  )
}

export default TwoItems
