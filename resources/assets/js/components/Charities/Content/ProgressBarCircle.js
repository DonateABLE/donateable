import React from "react";
import { Container, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CircularProgressBar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ProgressBarCircle = props => {
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
                        value={props.percentage}
                        text={props.barText}
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
                        <h2>props.title</h2>
                        <h1>props.details</h1>
                    </div>
                </Col>
            </Container>
        </div>
    );
};

export default ProgressBarCircle;
