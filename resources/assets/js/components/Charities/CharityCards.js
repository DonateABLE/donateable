import React from "react";
import { Card, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";
import {
    faGlobe,
    faBriefcaseMedical,
    faGlobeAmericas
} from "@fortawesome/free-solid-svg-icons";

const CharityCards = props => {
    return (
        <div>
            <style>
                {`
                    .btn-donating {
                        color: #fff;
                        background-color: #45a6d7;
                        border-color: #45a6d7;
                        width: 100%;
                        font-family: Montserrat-Medium, Barlow;
                    }

                    .btn:disabled {
                        opacity: 1 !important;
                    }

                    .btn-donators {
                        color: #fff;
                        background-color: #26607d;
                        border-color: #26607d;
                        width: 100%;
                        font-family: Montserrat-Medium, Barlow;
                    }
                    
                    .btn-social {
                        color: #fff;
                        background-color: #45a6d7;
                        border-color: #45a6d7;
                        width: 100%;
                        font-family: Montserrat-Medium, Barlow;
                    }
                    .social-container {
                        color: #fff;
                        background-color: #45a6d7;
                        border-color: #45a6d7;
                        width: 100%;
                        height: 45px;
                        font-family: Montserrat-Medium, Barlow;
                        padding: 0% 3%;
                    }
                    
                    .btn-donatehere {
                        color: #fff;
                        background-color: #26607d;
                        border-color: #26607d;
                        height: 60px;
                        font-size: 18px;
                        width: 100%;
                        font-family: Montserrat-Medium, Barlow;
                    }

                    .card {
                        margin-bottom: 5%;
                    }

                    .floating-social-icons{
                        margin-block-start: 0.1em;
                        margin-block-end: 0.1em;
                        margin-inline-start: 0px;
                        margin-inline-end: 0px;
                        margin: auto;
                    }
                `}
            </style>
            <Card className="text-center">
                <img
                    className="img-fluid"
                    src={props.image}
                    style={{ width: "100%" }}
                />
                <Card.Header
                    style={{
                        fontSize: "18px",
                        fontFamily: "Montserrat-Bold",
                        padding: "6px 12px"
                    }}
                >
                    {props.charityName}
                    <br />
                    <FontAwesomeIcon
                        icon={props.charityIcon}
                        style={{
                            color: "#26607d",
                            fontSize: "24px",
                            marginTop: "10px",
                            marginBottom: "5px"
                        }}
                    />
                </Card.Header>
                <Card.Body style={{ padding: "0px" }}>
                    <Button variant="donating" disabled>
                        Currently Donating: <b>{props.currentDonators}</b>
                    </Button>
                    <Button variant="donators" disabled>
                        Donators to Date: <b>{props.donators}</b>
                    </Button>
                    <Container className="social-container">
                        <ul className="floating-social-icons">
                            <li>
                                <a href={props.facebookLink}>
                                    <FontAwesomeIcon
                                        icon={faFacebookF}
                                        style={{ color: "white" }}
                                    />
                                </a>
                            </li>
                            <li>
                                <a href={props.twitterLink}>
                                    <FontAwesomeIcon
                                        icon={faTwitter}
                                        style={{ color: "white" }}
                                    />
                                </a>
                            </li>
                            <li>
                                <a href={props.siteLink}>
                                    <FontAwesomeIcon
                                        icon={faGlobe}
                                        style={{ color: "white" }}
                                    />
                                </a>
                            </li>
                        </ul>
                    </Container>
                    <Link to={props.donateLink}>
                        <Button variant="donatehere">DONATE</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CharityCards;
