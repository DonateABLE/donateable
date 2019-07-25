import React from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'

const SignupForm = ( props ) => {
  return (
    <Form style={{marginTop: '5%', width: '85%'}}>
      <Form.Group as={Row} controlId='signupEmail'>
        <Col sm={10}>
          <Form.Control type='email' placeholder='Email' />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId='signupPassword'>
        <Col sm={10}>
          <Form.Control type='password' placeholder='Password' />
        </Col>
      </Form.Group>
      
      <Form.Group as={Row} controlId='signupPasswordConfirm'>
        <Col sm={10}>
          <Form.Control type='password' placeholder='Confirm Password' />
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
export default SignupForm
