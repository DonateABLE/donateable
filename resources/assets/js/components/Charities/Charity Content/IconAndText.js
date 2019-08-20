import React from "react";
import { Container, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBatteryHalf,
    faHandHoldingHeart,
    faAmbulance
} from "@fortawesome/free-solid-svg-icons";

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
                    md="auto"
                    style={{
                        paddingLeft: "0",
                        paddingRight: "0"
                    }}
                >
                    <FontAwesomeIcon
                        icon={props.icon}
                        rotation={props.rotation}
                        size={props.size}
                        style={{
                            width: "100%",
                            margin: "auto",
                            color: "#26607D"
                        }}
                    />
                </Col>

                <Col
                    xs={7}
                    style={{
                        paddingLeft: "0",
                        paddingRight: "0"
                    }}
                >
                    <div style={{ textAlign: "left", margin: "auto" }}>
                        <p>
                            <strong>{props.num}</strong>
                            <br />
                            {props.bodytext}
                        </p>
                    </div>
                </Col>
            </Container>
        </div>
    );
};

export default IconAndText;
