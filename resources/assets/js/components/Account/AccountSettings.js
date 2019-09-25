import React, { Component } from "react";
import { Container, Form, Col, Button } from "react-bootstrap";
import { faLock, faLockOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputGroup, { InputGroupAppend } from "react-bootstrap/InputGroup";

const lockedStyle = {
    // Form Input stylings
    backgroundColor: `#26607d`,
    border: `1px #26607d solid`,
    borderRadius: `0px`,
    color: `#C0C0C0`,
    fontColor: `#ffffff`
};

const unlockedStyle = {
    backgroundColor: "#C0C0C0",
    border: "1 px #26607d solid",
    borderRadius: "0px",
    color: "#26607d",
    fontColor: "#26607d"
};

const iconLockedStyle = { color: "white" }; // Icon Colors
const iconUnlockedStyle = { color: "#26607d" };
const appendLockedStyle = { backgroundColor: "#26607d", border: "0px" }; // Icon background colors
const appendUnlockedStyle = { backgroundColor: "#C0C0C0", border: "0px" };

class AccountSettings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLocked: true,
            formStyle: lockedStyle,
            currentIcon: faLock,
            currentIconStyle: iconLockedStyle,
            appendStyle: appendLockedStyle
        };
        this.swap = this.swap.bind(this); // Good Practice to bind event handlers, for other Components
    }

    swap = event => {
        event.preventDefault(); // Stop default form submission
        this.setState(prevState => {
            return {
                // Change form style
                formStyle:
                    prevState.formStyle == lockedStyle // If prev is lockedstyle swap to unlockstyle
                        ? unlockedStyle
                        : lockedStyle, // else change to lockedstyle
                currentIcon:
                    prevState.currentIcon == faLock ? faLockOpen : faLock,
                currentIconStyle:
                    prevState.currentIconStyle == iconLockedStyle
                        ? iconUnlockedStyle
                        : iconLockedStyle,
                appendStyle:
                    prevState.appendStyle == appendLockedStyle
                        ? appendUnlockedStyle
                        : appendLockedStyle,
                isLocked: prevState.isLocked == true ? false : true
            };
        });
    };

    render() {
        return (
            <div>
                <style>
                    {`
                      .form-control::-webkit-input-placeholder { /* Chrome/Opera/Safari */
                        color: white ;
                      }
                      .form-control::-moz-placeholder { /* Firefox 19+ */
                        color: white ;
                      }
                      .form-control:-ms-input-placeholder { /* IE 10+ */
                        color: white ;
                      }
                      .form-control:-moz-placeholder { /* Firefox 18- */
                        color: white;
                      }
                `}
                </style>
                <Container>
                    <Form onSubmit={this.swap}>
                        <Form.Row>
                            <Col style={{ padding: "2% 0" }}>
                                <InputGroup>
                                    <Form.Control
                                        type="text"
                                        placeholder="FIRST NAME"
                                        disabled={this.state.isLocked}
                                        style={this.state.formStyle}
                                    />
                                    <InputGroup.Append>
                                        <InputGroup.Text
                                            style={this.state.appendStyle}
                                        >
                                            <FontAwesomeIcon
                                                icon={this.state.currentIcon}
                                                size="1x"
                                                style={
                                                    this.state.currentIconStyle
                                                }
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
                                        disabled={this.state.isLocked}
                                        style={this.state.formStyle}
                                        type="text"
                                        placeholder="LAST NAME"
                                    />
                                    <InputGroup.Append>
                                        <InputGroup.Text
                                            style={this.state.appendStyle}
                                        >
                                            <FontAwesomeIcon
                                                icon={this.state.currentIcon}
                                                size="1x"
                                                style={
                                                    this.state.currentIconStyle
                                                }
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
                                        style={this.state.formStyle}
                                        disabled={this.state.isLocked}
                                        required
                                        feedback="An email address is required"
                                        type="email"
                                        placeholder="EMAIL ADDRESS"
                                    />
                                    <InputGroup.Append>
                                        <InputGroup.Text
                                            style={this.state.appendStyle}
                                        >
                                            <FontAwesomeIcon
                                                icon={this.state.currentIcon}
                                                size="1x"
                                                style={
                                                    this.state.currentIconStyle
                                                }
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
                                        disabled={this.state.isLocked}
                                        style={this.state.formStyle}
                                        type="text"
                                        placeholder="USER NAME"
                                    />
                                    <InputGroup.Append>
                                        <InputGroup.Text
                                            style={this.state.appendStyle}
                                        >
                                            <FontAwesomeIcon
                                                icon={this.state.currentIcon}
                                                size="1x"
                                                style={
                                                    this.state.currentIconStyle
                                                }
                                            />
                                        </InputGroup.Text>
                                    </InputGroup.Append>
                                </InputGroup>
                            </Col>
                        </Form.Row>
                        <small className="form-text text-muted">
                            Your username will be used as an alias if you've
                            chosen to share your contribution stats so we don't
                            have to tell anyone your real name.
                        </small>
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
