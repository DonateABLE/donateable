import React, { Component } from "react";
import { Container, Form, Col, Button } from "react-bootstrap";

class AccountSettings extends Component {
    render() {
        return (
            <Container>
                <Form>
                    <Form.Row>
                        <Col
                            style={{ paddingLeft: "0px", paddingBottom: "2%" }}
                        >
                            <Form.Control
                                type="text"
                                placeholder="FIRST NAME"
                            />
                        </Col>
                        <Col
                            style={{ paddingRight: "0px", paddingBottom: "2%" }}
                        >
                            <Form.Control type="text" placeholder="LAST NAME" />
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col style={{ padding: "2% 0" }}>
                            <Form.Control
                                required
                                feedback="An email address is required"
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
                    <Form.Check
                        style={{
                            color: "#26607D",
                            fontWeight: "300",
                            fontSize: "1.25vh"
                        }}
                        label="I WOULD LIKE TO RECEIVE EMAILS FROM DONATEABLE ABOUT NEW FEATURES, STATS, AND OTHER COMMUNICATIONS."
                    ></Form.Check>
                    <Form.Check
                        style={{
                            color: "#26607D",
                            fontWeight: "300",
                            fontSize: "1.25vh"
                        }}
                        defaultChecked
                        label="I AGREE TO ALLOW DONATEABLE TO POST MY STATISTICS AND KEEP TRACK OF MY DONATIONS, HASHES, AND TIME SPENT."
                    />
                    <Button variant="turqdark" style={{padding: "4% 8%"}}type="submit">
                        EDIT ACCOUNT SETTINGS
                    </Button>
                </Form>
            </Container>
        );
    }
}

export default AccountSettings;
