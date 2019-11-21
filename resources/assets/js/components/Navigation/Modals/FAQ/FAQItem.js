import React from "react";
import { Accordion, Button, Card, Container } from "react-bootstrap";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FAQItem = props => {
    return (
        <div>
            <Accordion defaultActiveKey="0">
                <Card>
                    <Card.Header
                        style={{
                            fontSize: "2vh",
                            color: "white",
                            textTransform: "capitalize",
                            padding: "5px 7px"
                        }}
                    >
                        <Container style={{ paddingLeft: "15px" }}>
                            {props.title}
                        </Container>

                        <Container>
                            <Accordion.Toggle
                                as={Button}
                                variant="link"
                                style={{
                                    width: "35px",
                                    color: "#45a6d7",
                                    textAlign: "center",
                                    verticalAlign: "bottom",
                                    margin: "auto"
                                }}
                            >
                                <FontAwesomeIcon
                                    icon={faChevronDown}
                                    size="2x"
                                />
                            </Accordion.Toggle>
                        </Container>
                    </Card.Header>
                    <Accordion.Collapse>
                        <Card.Body>{props.bodyText}</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    );
};

export default FAQItem;
