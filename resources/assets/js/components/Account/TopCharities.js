import React, { Component } from "react";
import { Button, Col, Row, Container } from "react-bootstrap";
import { CircularProgressbar } from "react-circular-progressbar";
import AnimateProgressProvider from "../Animation/AnimatedProgressProvider";

// A 2x2 component to contain the User's top charity stats

class TopCharities extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col xs={3} style={{ margin: "auto" }}>
                        <CircularProgressbar
                            text={this.props.charityNum}
                            strokeWidth={10}
                            value={100}
                            style={{
                                path: {
                                    stroke: "#26607D"
                                },
                                trail: {
                                    stroke: "#45A6D7"
                                },
                                text: {
                                    fontSize: "30px"
                                }
                            }}
                        />
                    </Col>
                    <Col xs={9} style={{ margin: "auto" }}>
                        <img src={this.props.src} style={{ width: "80%" }} />
                    </Col>
                </Row>
                <Row>
                    <Col xs={2}>{/* EMPTY */}</Col>
                    <Col xs={10} style={{ margin: "auto" }}>
                        <Button
                            disabled
                            variant="turq"
                            style={{
                                backgroundColor: "#45A6D7",
                                borderColor: "#979797",
                                borderRadius: "0",
                                color: "#FFFFFF",
                                fontWeight: "300",
                                fontSize: "10pt",
                                fontFamily: "Montserrat-Bold, sans-serif",
                                height: "48px",
                                letterSpacing: "0.05em",
                                marginBottom: "6px",
                                maxWidth: "300px",
                                width: "90%",
                                padding: "7px 18px"
                            }}
                        >
                            TOTAL HASHES DONATED &nbsp;
                            <strong>{this.props.hashesNum}</strong>
                        </Button>
                        <Button
                            disabled
                            style={{
                                backgroundColor: "#45A6D7",
                                borderColor: "#979797",
                                borderRadius: "0",
                                color: "#FFFFFF",
                                fontWeight: "300",
                                fontSize: "10pt",
                                fontFamily: "Montserrat-Bold, sans-serif",
                                height: "48px",
                                letterSpacing: "0.05em",
                                marginBottom: "6px",
                                maxWidth: "300px",
                                width: "90%",
                                padding: "7px 18px"
                            }}
                        >
                            TOTAL TIME DONATED &nbsp;
                            <strong>{this.props.totalTime}</strong>
                        </Button>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default TopCharities;
