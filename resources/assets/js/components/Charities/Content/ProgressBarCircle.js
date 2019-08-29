import React, { Component } from "react";
import { Container, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CircularProgressbar } from "react-circular-progressbar";


class ProgressBarCircle extends Component {
    render() {
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
                        <CircularProgressBar
                            value={this.props.percentage}
                            text={this.props.barText}
                            strokeWidth={3}
                            style={buildStyles({
                                pathColor: "#45A6D7",
                                trailColor: "#26607D"
                            })}
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
                            <h2>this.props.title</h2>
                            <h1>this.props.details</h1>
                        </div>
                    </Col>
                </Container>
            </div>
        );
    }
}