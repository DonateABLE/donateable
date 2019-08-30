import React from "react";
import { Container, Col } from "react-bootstrap";
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
                    display: "flex",
                    paddingLeft: "0",
                    paddingRight: "0",
                    paddingTop: "3%",
                    paddingBottom: "3%"
                }}
            >
                <Col
                    xs={4}
                    style={{
                        paddingLeft: "5%",
                        paddingRight: "0",
                        margin: "auto"
                    }}
                >
                    <CircularProgressbarWithChildren
                        value={100}
                        strokeWidth={4}
                    >
                        <FontAwesomeIcon
                            icon={props.icon}
                            rotation={props.rotation}
                            size={props.size}
                            style={{
                                width: "60%",
                                margin: "auto",
                                color: "#26607D"
                            }}
                        />
                    </CircularProgressbarWithChildren>
                </Col>

                <Col
                    xs={8}
                    style={{
                        paddingLeft: "2%",
                        paddingRight: "4%",
                        margin: "auto"
                    }}
                >
                    <div style={{ textAlign: "center" }}>
                        <h2 style={{ color: "#45A6D7" }}>
                            {props.title}
                        </h2>
                        <h4 style={{ color: "#26607D", fontWeight: "200" }}>
                            {props.cost} <br /> {props.hashes}
                        </h4>
                        <br />
                        <p
                            style={{
                                padding: "0 0 2% 0",
                                color: "#26607D",
                                fontWeight: "200",
                                width: "90%"
                            }}
                        >
                            {props.bodytext}
                        </p>
                    </div>
                </Col>
            </Container>
        </div>
    );
};

export default IconAndText;
