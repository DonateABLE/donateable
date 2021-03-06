import React from "react";
import {
    Tabs,
    Tab,
    Container,
    Row,
    Col,
    Button,
    Form,
    Image
} from "react-bootstrap";
import TwoColorHeader from "../Charities/Content/TwoColorHeader";
import ProgressBar from "../Charities/Content/ProgressBar";
import AccountSettings from "./AccountSettings";
import TopCharities from "./TopCharities";

// Tabbed User Content Container
const TabbedUser = props => {
    return (
        <div>
            <style>
                {`

                .form-control::-webkit-input-placeholder { /* Chrome/Opera/Safari */
                    color: #26607d;
                }
                .form-control::-moz-placeholder { /* Firefox 19+ */
                    color: #26607d;
                }
                .form-control:-ms-input-placeholder { /* IE 10+ */
                    color: #26607d;
                }
                .form-control:-moz-placeholder { /* Firefox 18- */
                    color: #26607d;
                }
                                
                .nav-link {
                    padding: 1%;
                }

                .btn:disabled {
                    opacity: 1 !important; 
                }

                .h2 {
                    text-align: center;
                }

                .p {
                    padding: 2%;
                    margin: auto;
                }

                .row {
                    margin-left: 2%;
                    margin-right: 2%;
                    justify-content: center;
                }

                .CircularProgressbar-path {
                    stroke: rgb(38,96,125) !important;
                }

                .CircularProgressbar-trail {
                    stroke: rgb(69, 166, 215) !important;
                }

                .CircularProgressbar-text {
                    fill: #3e98c7;
                    font-size: 20px;
                    dominant-baseline: middle;
                    text-anchor: middle;
                }
            `}
            </style>
            <Container
                style={{
                    backgroundColor: "white",
                    color: "blue",
                    display: "flex",
                    flexDirection: "column",
                    flexWrap: "wrap",
                    paddingLeft: "0",
                    paddingRight: "0",
                    paddingTop: "3%",
                    paddingBottom: "3%",
                    margin: "auto",
                    width: "100%",
                    justifyContent: "center",
                    textAlign: "center"
                }}
            >
                <Row style={{ width: "100%", justifyContent: "center" }}>
                    <Button variant="turqdark" style={{ margin: "auto" }}>
                        START DONATING
                    </Button>
                </Row>

                <Row style={{ width: "100%", color: "black" }}>
                    {/* ACCOUNT SETTINGS TAB */}

                    <Tabs defaultActiveKey="accountsettings" id="account-tabs">
                        <Tab eventKey="accountsettings" title="Settings">
                            <h2 style={{ marginTop: "3%" }}>
                                <TwoColorHeader
                                    darkText="ACCOUNT"
                                    lightText="SETTINGS"
                                />
                            </h2>

                            <AccountSettings />
                        </Tab>

                        {/* TOP CHARITY TAB */}

                        <Tab eventKey="topcharities" title="Charities">
                            <h2
                                style={{ marginTop: "3%", textAlign: "center" }}
                            >
                                <TwoColorHeader
                                    darkText="YOUR TOP DONATED"
                                    lightText="CHARITIES"
                                />
                            </h2>

                            <TopCharities
                                charityNum={1}
                                src="/img/charity/ghs.png"
                                hashesNum={813231}
                                totalTime="0:0:39"
                            />

                            <TopCharities
                                charityNum={2}
                                src="/img/charity/VSW-Logo.png"
                                hashesNum={123456}
                                totalTime="12:34:00"
                            />
                            <TopCharities
                                charityNum={3}
                                src="/img/charity/donateable-charity.png"
                                hashesNum={423453429}
                                totalTime="18:54:44"
                            />
                        </Tab>

                        {/* YOUR STATS TAB */}

                        <Tab eventKey="Your Statistics" title="Statistics">
                            <TwoColorHeader
                                darkText="YOUR"
                                lightText="STATISTICS"
                            />

                            <Image
                                src="/img/profilepix.jpeg"
                                roundedCircle
                                style={{
                                    margin: "auto",
                                    height: "25%",
                                    width: "25%"
                                }}
                            />
                            <h2>LUKE PRITCHARD</h2>
                            <h2 style={{ fontWeight: "300", fontSize: "16px" }}>
                                {" "}
                                STATISTICS
                            </h2>

                            <ProgressBar
                                label="3"
                                percentage={40}
                                title="CHARITIES DONATED TO"
                                details="3 CHARITIES"
                            />
                            <ProgressBar
                                label="19M"
                                percentage={62}
                                title="TOTAL TIME DONATED TO"
                                details="19:00:00"
                            />
                            <ProgressBar
                                label="5K"
                                percentage={79}
                                title="TOTAL HASHES"
                                details="5 888"
                            />
                        </Tab>

                        {/* RESET PASSWORD TAB */}

                        <Tab eventKey="resetpassword" title="Reset Password">
                            <TwoColorHeader
                                darkText="RESET"
                                lightText="PASSWORD"
                            />
                            <Form style={{ paddingTop: "5%" }}>
                                <Form.Group as={Row} controlId="reset-password">
                                    <Col sm={10}>
                                        <Form.Control
                                            type="password"
                                            placeholder="New Password"
                                        />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="loginPassword">
                                    <Col sm={10}>
                                        <Form.Control
                                            type="password"
                                            placeholder="Confirm Password"
                                        />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row}>
                                    <Col sm={{ span: 10, offset: 2 }}>
                                        <Button
                                            variant="turqdark"
                                            type="submit"
                                        >
                                            Submit
                                        </Button>
                                    </Col>
                                </Form.Group>
                            </Form>
                        </Tab>
                    </Tabs>
                </Row>
            </Container>
        </div>
    );
};

export default TabbedUser;
