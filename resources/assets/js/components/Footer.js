import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
    return (
        <div id="footer">
            <Container
                style={{
                    backgroundColor: "white",
                    color: "#26607D",
                    fontSize: "0.95rem",
                    fontWeight: "500",
                    width: "100%",
                    height: "70px"
                }}
            >
                <Row>
                    <Col className="text-center">Powered By &nbsp;</Col>
                </Row>
                <Row>
                    <Col className="text-center">
                        <a href="https://www.synergenics.ca" target="_blank">
                            <img
                                src="/img/logo/Synergenics-Logo.png"
                                style={{ width: "60%", maxWidth: "134px" }}
                            />
                        </a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;
