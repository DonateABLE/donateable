import React from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'

const TechSupport = (props) => {
  return (
    <Form style={{marginTop: '5%', width: '100%'}}>
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

      <Form.Group as={Row} controlId='formSubject'>
        <Col sm={10}>
          <Form.Control type='text' placeholder='Subject' />
        </Col>
      </Form.Group> 

      <Form.Group as={Row} controlId='formMessage'>
        <Col sm={10}>
          <Form.Control style={{paddingBottom: '50%', paddingTop: '5%'}} type='text' placeholder='Message' />
        </Col>
      </Form.Group>

      <Form.Group as={Row}>
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="submit">Submit</Button>
        </Col>
      </Form.Group>
    </Form>
  )
}

export default TechSupport
