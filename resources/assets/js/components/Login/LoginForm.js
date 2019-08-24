import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

const LoginForm = props => {
    return (
        <Form>
            <Form.Group as={Row} controlId="loginEmail">
                <Col sm={10}>
                    <Form.Control type="email" placeholder="Email" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="loginPassword">
                <Col sm={10}>
                    <Form.Control type="password" placeholder="Password" />
                </Col>
            </Form.Group>

            <Form.Group as={Row}>
                <Col sm={{ span: 10, offset: 2 }}>
                    <Button variant={props.variant} type="submit">
                        Login
                    </Button>
                </Col>
            </Form.Group>
        </Form>
    );
};
export default LoginForm;
