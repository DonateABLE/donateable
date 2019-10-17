import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
    return (
        <div id="footer" style={{paddingTop: "10%"}}>
            <Container
                style={{
                    backgroundColor: "#26607D",
                    color: "white",
                    fontSize: "0.95rem",
                    fontWeight: "500",
                    width: "100%",
                    height: "70px"
                }}
            >
                <Row style={{paddingTop: "3%"}}>
                    <Col className="text-center">
                        Powered By &nbsp;
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center">
                        <a href="https://www.synergenics.ca" target="_blank">
                            <img
                                src="/img/logo/Synergenics-Logo-2008-White.png"
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
