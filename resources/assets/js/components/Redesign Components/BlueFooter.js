import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
    return (
        <div>
            <Container
                style={{
                    backgroundColor: "#26607D",
                    width: "100%",
                    height: "100%"
                }}
            >
                <div
                    style={{
                        color: "white",
                        display: "flex",
                        justifyContent: "center",
                        fontSize: "1rem",
                        margin: "auto",
                        height: "150px"
                    }}
                >
                    Powered By &nbsp;
                    <a href="https://www.synergenics.ca" target="_blank">
                        <img
                            src="/img/logo/Synergenics-Logo-2008-White.png"
                            style={{ width: "60%" }}
                        />
                    </a>
                </div>
            </Container>
        </div>
    );
}

export default Footer;
