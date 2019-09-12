import React from "react";
import { Tabs, Tab, Container, Row, Col, Button } from "react-bootstrap";
import LineBreak from "./LineBreak";
import ImageAndText from "./ImageAndText";
import IconAndText from "./IconAndText";
import {
    faBatteryHalf,
    faAmbulance,
    faHandHoldingHeart
} from "@fortawesome/free-solid-svg-icons";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import ProgressBar from "./ProgressBar";
import TwoColorHeader from "./TwoColorHeader";
import DonateSlider from "./DonateSlider";
import Stats from "./Stats";

// Tabbed Content Container
const TabbedContainer = props => {
    return (
        <div>
            <style>
                {`
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
                }

                .CircularProgressbar-path {
                    stroke: rgb(69, 166, 215) !important;
                }

                .CircularProgressbar-trail {
                    stroke: #26607D !important;
                }

                .CircularProgressbar-text {
                    fill: #3e98c7;
                    font-size: 20px;
                    dominant-baseline: middle;
                    text-anchor: middle;
                }

                .btn-turqwhite{
                    background-color: #FFFFFF;
                    border-color: #979797;
                    border-radius: 0;
                    color: #26607D;
                    font-weight: 500;
                    letter-spacing: 0.05em;
                    font-family: 'Montserrat-Bold', sans-serif;
                    margin-bottom: 5px;
                    width: 305px;
                    height: 48px;
                    font-size: 10pt;
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
                    justifyContent: "center"
                }}
            >
                <Row style={{ width: "100%" }}>
                    <Button variant="turqdark"> MONETARY DONATION</Button>
                </Row>

                <Row style={{ width: "100%", color: "black" }}>
                    {/* ABOUT TAB */}

                    <Tabs defaultActiveKey="about" id="charity-tabs">
                        <Tab eventKey="about" title="About">
                            <TwoColorHeader
                                darkText="ABOUT"
                                lightText="VICTIM SERVICES WELLINGTON (VSW)"
                            />
                            <p style={{ color: "#26607D" }}>
                                Anyone can be a victim. It is in times of trauma
                                that victims need compassion, support, and
                                assistance most. Whether an accident has
                                occurred, a crime committed, or a loss suffered.
                                Victim Services Wellinton (VSW) is available 24
                                hours a day, 7 days a week, all year round to
                                support victims.
                            </p>

                            <p style={{ color: "#26607D" }}>
                                A non-profit organization, established in 1997,
                                VSW has partnerships with Guelph Police Services
                                and the Ontario Provinicial Police to deliver
                                support to victims of crime in our area.
                                Volunteers are available on scene to help
                                victims and their families through difficult
                                events and refer them to appropriate community
                                groups and organizations.
                            </p>
                            <p style={{ color: "#26607D" }}>
                                VSW volunteers are trained extensively to help
                                meet the short-term needs of victims. They are
                                backed with widespread knowledge and experience
                                in communication, crisis interpresence to what
                                can be highly emotional, stressful, and
                                overwhelming circumstances.
                            </p>

                            <TwoColorHeader
                                darkText="CONTACT"
                                lightText="VICTIM SERVICES WELLINGTON (VSW)"
                            />

                            <p
                                style={{
                                    textAlign: "center",
                                    color: "#26607D"
                                }}
                            >
                                15 Wyndam Street South
                                <br />
                                Guelph, Ontario
                                <br />
                                N1H 4C6
                            </p>

                            <LineBreak />
                            <p
                                style={{
                                    textAlign: "center",
                                    color: "#26607D"
                                }}
                            >
                                <strong>Phone:</strong> (519) 824-1212 ext 7304
                                <br />
                                <strong>Email:</strong> victim@vswguelph.on.ca
                            </p>
                            <LineBreak />
                            <p
                                style={{
                                    textAlign: "center",
                                    color: "#26607D"
                                }}
                            >
                                <strong>Office Hours</strong>
                                <br />
                                Monday to Friday from
                                <br />
                                9am to 5pm
                            </p>
                        </Tab>

                        {/* CHARITY STATS TAB */}

                        <Tab eventKey="statistics" title="Statistics">
                            <div style={{ alignContent: "left" }}>
                                <TwoColorHeader
                                    darkText="CHARITY AND DONATEABLE"
                                    lightText="STATISTICS"
                                />
                            </div>
                            <Stats />
                        </Tab>

                        {/* DONATION TARGETS TAB */}

                        <Tab eventKey="targets" title="Targets">
                            <TwoColorHeader
                                darkText="DONATION"
                                lightText="TARGETS"
                            />
                            <IconAndText
                                icon={faBatteryHalf}
                                size="5x"
                                rotation={270}
                                title="LIFESAVER BRACELET BATTERY"
                                cost="COST = $5"
                                hashes="= 500,000,000 HASHES"
                                bodytext="A small battery used in the Lifesaver Bracelet allowing the system to operate everyday of the year."
                            />
                            <LineBreak />
                            <IconAndText
                                icon={faHandHoldingHeart}
                                size="5x"
                                title="VOLUNTEER TRAINING"
                                cost="COST = $100"
                                hashes="= 10,000,000,000 HASHES"
                                bodytext="Responsible for immediate mobile response to requests from emergency and police services within Wellington County."
                            />
                            <LineBreak />
                            <IconAndText
                                icon={faAmbulance}
                                size="5x"
                                title="LIFESAVER BRACELET"
                                cost="COST = $400"
                                hashes="= 40,000,000,000 HASHES"
                                bodytext="A one ounce wrist transmitter that sends a radio signal which can be tracked up to a 2 kilometer radius."
                            />
                        </Tab>

                        {/* DONATE NOW TAB */}

                        <Tab eventKey="donate-now" title="Donate Now">
                            <TwoColorHeader
                                style={{ paddingTop: "3%" }}
                                darkText="DONATE"
                                lightText="NOW"
                            />
                            <ProgressBar
                                label="0"
                                percentage={0}
                                title="HASHING RATE"
                                details="0 PER SECOND"
                            />
                            <ProgressBar
                                label="0"
                                percentage={0}
                                title="TOTAL TIME"
                                details="0 SECONDS"
                            />
                            <ProgressBar
                                label="0"
                                percentage={0}
                                title="TOTAL HASHES"
                                details="# 0"
                            />

                            <div style={{ alignContent: "center" }}>
                                <DonateSlider />
                                <Button variant="turqdark">START</Button>
                                <Button variant="turqwhite">STOP</Button>
                            </div>
                        </Tab>
                    </Tabs>
                </Row>
            </Container>
        </div>
    );
};

export default TabbedContainer;
