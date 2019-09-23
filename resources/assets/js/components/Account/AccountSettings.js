import React, { Component } from "react";
import { Container, Form, Col, Button } from "react-bootstrap";
import { faLock, faLockOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputGroup, { InputGroupAppend } from "react-bootstrap/InputGroup";

class AccountSettings extends Component {
    render() {
        let formStyle = {
            backgroundColor: `#26607d`,
            border: `1px #26607d solid`,
            borderRadius: `0px`,
            color: `#ffffff`,
            fontColor: `#ffffff`
        };

        return (
            <div>
                <style>
                    {`
                    .form-control-unlocked {
                        background-color: #fffff;
                        border: 1px #26607d solid;
                        border-radius: 0px;
                        color: #26607d;
                    }

                    .form-control-locked {
                        background-color: #26607d;
                        border: 1px white solid;
                        border-radius: 0px;
                        color: white;
                    }

                    .form-control::-webkit-input-placeholder { /* Chrome/Opera/Safari */
                        color: white;
                      }
                      .form-control::-moz-placeholder { /* Firefox 19+ */
                        color: white;
                      }
                      .form-control:-ms-input-placeholder { /* IE 10+ */
                        color: white;
                      }
                      .form-control:-moz-placeholder { /* Firefox 18- */
                        color: white;
                      }
                `}
                </style>
                <Container>
                    <Form>
                        <Form.Row>
                            <Col style={{ padding: "2% 0" }}>
                                <InputGroup>
                                    <Form.Control
                                        type="text"
                                        placeholder="FIRST NAME"
                                        disabled
                                        style={formStyle}
                                    />
                                    <InputGroup.Append>
                                        <InputGroup.Text style={{backgroundColor: "#26607D", border: '0px'}}>
                                            <FontAwesomeIcon
                                                icon={faLock}
                                                size="1x"
                                                style={{
                                                    color: "white"
                                                }}
                                            />
                                        </InputGroup.Text>
                                    </InputGroup.Append>
                                </InputGroup>
                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <Col style={{ padding: "2% 0" }}>
                                <InputGroup>
                                    <Form.Control
                                        disabled
                                        style={formStyle}
                                        type="text"
                                        placeholder="LAST NAME"
                                    />
                                    <InputGroup.Append>
                                        <InputGroup.Text style={{backgroundColor: "#26607D", border: "0px"}}>
                                            <FontAwesomeIcon
                                                icon={faLock}
                                                size="1x"
                                                style={{
                                                    color: "white"
                                                }}
                                            />
                                        </InputGroup.Text>
                                    </InputGroup.Append>
                                </InputGroup>
                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <Col style={{ padding: "2% 0" }}>
                                <InputGroup>
                                    <Form.Control
                                        style={formStyle}
                                        required
                                        feedback="An email address is required"
                                        type="email"
                                        placeholder="EMAIL ADDRESS"
                                        disabled
                                    />
                                    <InputGroup.Append>
                                        <InputGroup.Text  style={{backgroundColor: "#26607D", border: "0px"}}>
                                            <FontAwesomeIcon
                                                icon={faLock}
                                                size="1x"
                                                style={{
                                                    color: "white"
                                                }}
                                            />
                                        </InputGroup.Text>
                                    </InputGroup.Append>
                                </InputGroup>
                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <Col style={{ padding: "2% 0" }}>
                                <InputGroup>
                                    <Form.Control
                                        disabled
                                        style={formStyle}
                                        type="text"
                                        placeholder="USER NAME"
                                    />
                                    <InputGroup.Append>
                                        <InputGroup.Text style={{backgroundColor: "#26607D", border: "0px"}}>
                                            <FontAwesomeIcon
                                                icon={faLock}
                                                size="1x"
                                                style={{
                                                    color: "white"
                                                }}
                                            />
                                        </InputGroup.Text>
                                    </InputGroup.Append>
                                </InputGroup>
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
                        <Button
                            onSu
                            variant="turqdark"
                            style={{ padding: "4% 8%" }}
                            type="submit"
                        >
                            EDIT ACCOUNT SETTINGS
                        </Button>
                    </Form>
                </Container>
            </div>
        );
    }
}

export default AccountSettings;
