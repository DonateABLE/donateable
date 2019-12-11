import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBatteryHalf,
    faHandHoldingHeart,
    faAmbulance
} from "@fortawesome/free-solid-svg-icons";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";

const IconAndText = props => {
    return (
        <div>
            <Container
                style={{
                    backgroundColor: "white",
                    color: "#26607D",
                    display: "flex", // Using flexbox
                    flexWrap: "wrap",
                    fontFamily: "Montserrat, Barlow, sans-serif",
                    paddingLeft: "0",
                    paddingRight: "0",
                    paddingTop: "3%",
                    paddingBottom: "3%"
                }}
            >
                <Row style={{ margin: "auto", width: "45vw" }}>
                    <Col style={{ flexGrow: "2" }}>
                        <CircularProgressbarWithChildren
                            value={100}
                            strokeWidth={4}
                        >
                            <FontAwesomeIcon
                                icon={props.icon}
                                rotation={props.rotation}
                                size={props.size}
                                style={{
                                    margin: "auto",
                                    color: "#26607D"
                                }}
                            />
                        </CircularProgressbarWithChildren>
                    </Col>
                </Row>

                <Row
                    style={{ margin: "auto", width: "100%", paddingTop: "2vh" }}
                >
                    <Col>
                        <div style={{ textAlign: "center" }}>
                            <h2
                                style={{
                                    color: "#45A6D7",
                                    fontFamily:
                                        "Montserrat, Barlow, sans-serif",
                                    fontSize: "18px"
                                }}
                            >
                                {props.title}
                            </h2>
                            <h4
                                style={{
                                    color: "#26607D",
                                    fontWeight: "200",
                                    fontFamily:
                                        "Montserrat, Barlow, sans-serif",
                                    fontSize: "16px"
                                }}
                            >
                                {props.cost} <br /> {props.hashes}
                            </h4>
                            <br />
                            <p
                                style={{
                                    padding: "0 0 2% 0",
                                    color: "#26607D",
                                    fontWeight: "200",
                                    margin: "auto",
                                    fontFamily:
                                        "Montserrat, Barlow, sans-serif",
                                    fontSize: "13px",
                                    width: "90%",
                                    textAlign: "center"
                                }}
                            >
                                {props.bodytext}
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default IconAndText;
