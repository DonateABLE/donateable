import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
    return (
        <div>
            <Container
                style={{
                    backgroundColor: "#26607D",
                    color: "white",
                    fontSize: "1.1rem",
                    fontWeight: "500",
                    width: "100%",
                    height: "54px",
                }}
            >
                <Row>
                    <Col xs={5} style={{ margin: "auto" }}>
                        Powered By &nbsp; 
                    </Col>
                    <Col xs={7} style={{ margin: "auto" }}>
                        <a href="https://www.synergenics.ca" target="_blank">
                            <img
                                src="/img/logo/Synergenics-Logo-2008-White.png"
                                style={{ width: "70%" }}
                            />
                        </a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;
