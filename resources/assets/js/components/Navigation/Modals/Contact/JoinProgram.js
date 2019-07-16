import React from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'

const JoinProgram = (props) => {
  return (

    <Form style={{marginTop: '5%', width: '85%'}}>
      <Form.Group as={Row} controlId='formFirstName'>
        <Col sm={10}>
          <Form.Control type='text' placeholder='First Name' />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId='formLastName'>
        <Col sm={10}>
          <Form.Control type='text' placeholder='Last Name' />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId='formHorizontalEmail'>
        <Col sm={10}>
          <Form.Control type='email' placeholder='Email' />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId='formCharityName'>
        <Col sm={10}>
          <Form.Control type='text' placeholder='Charity Name' />
        </Col>
      </Form.Group> 

      <Form.Group as={Row} controlId='formAdditionalInfo'>
        <Col sm={10}>
          <Form.Control style={{paddingBottom: '15%', paddingTop: '5%'}} type='text' placeholder='Additional Information' />
        </Col>
      </Form.Group>

      <Form.Group as={Row}>
        <Col sm={{ span: 10, offset: 2 }}>
          <Button variant={props.variant} type="submit">Submit</Button>
        </Col>
      </Form.Group>
    </Form>
  )
}

export default JoinProgram 
