import React from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const SocialLinks = props => {
    return (
        <Container
            className="text-center"
            style={{
                backgroundColor: "#26607D",
                fontSize: "5vw",
                paddingTop: "2%",
                paddingBottom: "2%"
            }}
        >
            <a href={props.userFb}>
                <FontAwesomeIcon
                    icon={faFacebookF}
                    style={{ color: "white" }}
                />
            </a>
            &nbsp; &nbsp; &nbsp;
            <a href={props.userTwitter}>
                <FontAwesomeIcon icon={faTwitter} style={{ color: "white" }} />
            </a>
            &nbsp; &nbsp; &nbsp;
            <a href={props.userSite}>
                <FontAwesomeIcon icon={faGlobe} style={{ color: "white" }} />
            </a>
        </Container>
    );
};

export default SocialLinks;
