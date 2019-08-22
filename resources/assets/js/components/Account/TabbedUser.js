import React from "react";
import { Tabs, Tab, Container, Row, Col, Button } from "react-bootstrap";
import LineBreak from "./LineBreak";
import {
    faBatteryHalf,
    faAmbulance,
    faHandHoldingHeart
} from "@fortawesome/free-solid-svg-icons";

// Tabbed User Content Container
const TabbedUser = props => {
    return (
        <div>
            <style>
                {`
                
                .nav-link {
                    padding: 1%;
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
                <Row style={{ width: "100%", justifyContent: "center"}}>
                    <Button variant="turqdark" style={{margin: "auto"}}>START DONATING</Button>
                </Row>

                <Row style={{ width: "100%", color: "black" }}>
                    {/* ABOUT TAB */}

                    <Tabs defaultActiveKey="accountsettings" id="account-tabs">
                        <Tab eventKey="acountsettings" title="Settings">
                            <h2 style={{ marginTop: "3%" }}>
                                Account Settings
                            </h2>
                        </Tab>

                        {/* CHARITY STATS TAB */}

                        <Tab eventKey="topcharities" title="Charities">
                            <h2
                                style={{ marginTop: "3%", textAlign: "center" }}
                            >
                                Top Charities
                            </h2>
                        </Tab>

                        {/* DONATION TARGETS TAB */}

                        <Tab eventKey="Your Statistics" title="Statistics">
                            <h2>Your Statistics</h2>
                        </Tab>

                        {/* DONATE NOW TAB */}

                        <Tab eventKey="resetpassword" title="Reset Password">
                            <h2>Reset Password</h2>
                        </Tab>
                    </Tabs>
                </Row>
            </Container>
        </div>
    );
};

export default TabbedUser;
