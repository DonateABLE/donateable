import React, { Component } from "react";
import { Container, Col, Row, Button, Tab, Tabs } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faGlobe } from "@fortawesome/free-solid-svg-icons";
import {
    faFacebookSquare,
    faTwitterSquare
} from "@fortawesome/free-brands-svg-icons";
import TabbedContainer from "./TabbedContainer";

class CharityTemplate extends Component {
    componentDidMount() {
        window.scrollTo(0, 0); // Scroll to the top when routing
    }

    render() {
        return (
            <div>
                <style>
                    {`
              .container{
                font-weight: 400;
                width: 100%;
              }

              .fa {
                transform: translateY(-4%);
              }
    
              .row {
                justify-content: center;
              }
    
              .p {
                padding: 0px 0px 0px 0px !important;
                margin: 0px 0px 0px 0px !important;
                color: white;
                font-color: white;
              }
            `}
                </style>
                {/* Return to Charities Container */}
                <Container
                    style={{
                        backgroundColor: "#26607D",
                        textAlign: "right",
                        color: "white",
                        padding: "17px 0px 7px 0px"
                    }}
                >
                    <Link
                        to="/charities"
                        style={{
                            color: "white",
                            textDecoration: "none"
                        }}
                    >
                        Return to Charities
                        <FontAwesomeIcon
                            icon={faPlay}
                            style={{ color: "white", marginLeft: "13px" }}
                        />
                    </Link>
                </Container>
                {/* Charity Info Container*/}
                <Container
                    style={{
                        backgroundColor: "#45A6D7",
                        color: "white",
                        display: "flex",
                        fontFamily: "Montserrat, Barlow, sans-serif",
                        paddingLeft: "0",
                        paddingRight: "0",
                        paddingTop: "3%",
                        paddingBottom: "3%"
                    }}
                >
                    <Col
                        md="auto"
                        style={{ paddingLeft: "0", paddingRight: "0" }}
                    >
                        <div>
                            <img
                                src="/img/charity/Victim-Services.png"
                                style={{ width: "100%", height: "100%" }}
                            />
                        </div>
                    </Col>

                    <Col xs={8} style={{ paddingLeft: "0", paddingRight: "0" }}>
                        <div style={{ textAlign: "left" }}>
                            <p
                                style={{
                                    fontWeight: "550",
                                    fontSize: "1.6vh",
                                    color: "white",
                                    padding: "0px 0px 0px 0px",
                                    margin: "0px 0px 0px 0px"
                                }}
                            >
                                VICTIM SERVICES WELLINGTON (VSW)
                            </p>
                            <p
                                style={{
                                    fontWeight: "300",
                                    fontSize: "1.4vh",
                                    color: "white",
                                    padding: "0px 0px 0px 0px",
                                    margin: "0px 0px 0px 0px"
                                }}
                            >
                                COMMUNITY. CONNECTION. CRISIS SUPPORT.
                            </p>
                            <p
                                style={{
                                    fontWeight: "550",
                                    fontSize: "1.1vh",
                                    color: "white",
                                    padding: "0px 0px 0px 0px",
                                    margin: "0px 0px 0px 0px"
                                }}
                            >
                                Registered Business Name: Victim Services
                                Wellington
                                <br />
                                Business Number: 891472763RR0001
                            </p>
                        </div>
                    </Col>
                </Container>

                {/* SOCIAL MEDIA BUTTON CONTAINER */}
                <Container
                    className="text-center"
                    style={{
                        backgroundColor: "#26607D",
                        fontSize: "5vw",
                        paddingTop: "2%",
                        paddingBottom: "2%",
                        display: "inline-block",
                        verticalAlign: "middle"
                    }}
                >
                    <a href="https://www.facebook.com/www.vswguelph.on.ca/">
                        <FontAwesomeIcon
                            icon={faFacebookSquare}
                            style={{ color: "white", fontSize: "22px" }}
                        />
                    </a>
                    &nbsp; &nbsp; &nbsp;
                    <a href="https://www.facebook.com/www.vswguelph.on.ca/">
                        <FontAwesomeIcon
                            icon={faTwitterSquare}
                            style={{ color: "white", fontSize: "22px" }}
                        />
                    </a>
                    &nbsp; &nbsp; &nbsp;
                    <a href="https://www.facebook.com/www.vswguelph.on.ca/">
                        {/* <FontAwesomeIcon
                            icon={faGlobe}
                            style={{ color: "white" }}
                        /> */}
                        <img src="/img/globe-square.svg" />
                    </a>
                </Container>
                <TabbedContainer />
            </div>
        );
    }
}

export default CharityTemplate;
