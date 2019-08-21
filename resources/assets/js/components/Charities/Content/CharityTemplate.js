import React from "react";
import { Container, Col, Row, Button, Tab, Tabs } from "react-bootstrap";
import NavLink from "react-bootstrap/NavLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";
import TabbedContainer from "./TabbedContainer";

const CharityTemplate = props => {
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
                style={{ backgroundColor: "#26607D", textAlign: "right", color: "white" }}
            >   
                    <NavLink to="/charities" style={{color: 'white'}}>
                    Return to Charities
                    <FontAwesomeIcon
                        icon={faPlay}
                        style={{ color: "white", marginLeft: "13px" }}
                    />
                </NavLink>
            </Container>
            {/* Charity Info Container*/}
            <Container
                style={{
                    backgroundColor: "#45A6D7",
                    color: "white",
                    display: "flex",
                    paddingLeft: "0",
                    paddingRight: "0",
                    paddingTop: "3%",
                    paddingBottom: "3%"
                }}
            >
                <Col md="auto" style={{ paddingLeft: "0", paddingRight: "0" }}>
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
                                fontWeight: "700",
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
                                fontWeight: "700",
                                fontSize: "1.1vh",
                                color: "white",
                                padding: "0px 0px 0px 0px",
                                margin: "0px 0px 0px 0px"
                            }}
                        >
                            Registered Business Name: Victim Services Wellington
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
                    paddingBottom: "2%"
                }}
            >
                <a href="https://www.facebook.com/www.vswguelph.on.ca/">
                    <FontAwesomeIcon
                        icon={faFacebookF}
                        style={{ color: "white" }}
                    />
                </a>
                &nbsp; &nbsp; &nbsp;
                <a href="https://www.facebook.com/www.vswguelph.on.ca/">
                    <FontAwesomeIcon
                        icon={faTwitter}
                        style={{ color: "white" }}
                    />
                </a>
                &nbsp; &nbsp; &nbsp;
                <a href="https://www.facebook.com/www.vswguelph.on.ca/">
                    <FontAwesomeIcon
                        icon={faGlobe}
                        style={{ color: "white" }}
                    />
                </a>
            </Container>

          <TabbedContainer /> 
        </div>
    );
};

export default CharityTemplate;
