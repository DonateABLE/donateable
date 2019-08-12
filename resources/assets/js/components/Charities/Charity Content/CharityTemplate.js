import React from "react";
import { Container } from "react-bootstrap";
import NavLink from "react-bootstrap/NavLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";

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

          .nav-link {
            color: white !important;
          }
        `}
            </style>
            <Container
                style={{ backgroundColor: "#26607D", textAlign: "right" }}
            >
                <NavLink to="/charities">
                    Return to Charities
                    <FontAwesomeIcon
                        icon={faPlay}
                        style={{ color: "white", marginLeft: "13px" }}
                    />
                </NavLink>
            </Container>
            {/* BE SURE TO CHECK VW UNITS IN FONT SIZE */}

            <Container
                style={{
                    backgroundColor: "#45A6D7",
                    color: "white",
                    display: "grid | inline-grid",
                    gridAutoFlow: "row dense"
                }}
            >
                <div style={{display: 'grid'}}>
                    <img
                        src="/img/charity/Victim-Services.png"
                        style={{ width: "100px" }}
                    />
                </div>

                <div style={{display: 'grid'}}>Placeholder text</div>
            </Container>

            {/* SOCIAL MEDIA BUTTON CONTAINER */}
            <Container
                className="text-center"
                style={{ backgroundColor: "#26607D", fontSize: "5vw" }}
            >
                <a href="https://www.facebook.com/www.vswguelph.on.ca/">
                    <FontAwesomeIcon
                        icon={faFacebookF}
                        style={{ color: "white" }}
                    />
                </a>
                &nbsp; &nbsp;
                <a href="https://www.facebook.com/www.vswguelph.on.ca/">
                    <FontAwesomeIcon
                        icon={faTwitter}
                        style={{ color: "white" }}
                    />
                </a>
                &nbsp; &nbsp;
                <a href="https://www.facebook.com/www.vswguelph.on.ca/">
                    <FontAwesomeIcon
                        icon={faGlobe}
                        style={{ color: "white" }}
                    />
                </a>
            </Container>
        </div>
    );
};

export default CharityTemplate;
