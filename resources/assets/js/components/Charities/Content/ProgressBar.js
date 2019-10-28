import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { CircularProgressbar } from "react-circular-progressbar";

class ProgressBar extends Component {
    render() {
        return (
            <Container
                style={{
                    marginTop: "5%",
                    fontFamily: "Montserrat, Barlow, sans-serif"
                }}
            >
                <Row>
                    <Col
                        xs={3}
                        style={{
                            paddingLeft: "0",
                            paddingRight: "0"
                        }}
                    >
                        <CircularProgressbar
                            text={this.props.label}
                            strokeWidth={10}
                            value={this.props.percentage}
                            style={{
                                path: {
                                    stroke: "#45A6D7"
                                },
                                trail: {
                                    stroke: "#26607D"
                                },
                                text: {
                                    fontSize: "16px"
                                }
                            }}
                        />
                    </Col>
                    <Col
                        xs={9}
                        style={{
                            paddingLeft: "8%",
                            paddingRight: "1%",
                            margin: "auto"
                        }}
                    >
                        <div
                            style={{
                                textAlign: "left",
                                margin: "auto"
                            }}
                        >
                            <h2
                                style={{
                                    fontFamily: "Montserrat, Barlow, sans-serif"
                                }}
                            >
                                {this.props.title}
                            </h2>
                            <h2
                                style={{
                                    color: "#45A6D7",
                                    fontFamily: "Montserrat, Barlow, sans-serif"
                                }}
                            >
                                {this.props.details}
                            </h2>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ProgressBar;
