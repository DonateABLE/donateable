import React, { Component } from "react";
import { Container, Form, Col } from "react-bootstrap";

class AccountSettings extends Component {
    render() {
        return (
            <Container>
                <Form>
                    <Form.Row>
                        <Col style={{ paddingLeft: "0px", paddingBottom: "2%"}}>
                            <Form.Control
                                type="text"
                                placeholder="FIRST NAME"
                            />
                        </Col>
                        <Col style={{ paddingRight: "0px", paddingBottom: "2%" }}>
                            <Form.Control type="text" placeholder="LAST NAME" />
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col style={{ padding: "2% 0" }}>
                            <Form.Control
                                type="email"
                                placeholder="EMAIL ADDRESS"
                            />
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col style={{ padding: "2% 0" }}>
                            <Form.Control type="text" placeholder="USER NAME" />
                        </Col>
                    </Form.Row>
                </Form>
            </Container>
        );
    }
}

export default AccountSettings;
