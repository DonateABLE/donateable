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
import "react-circular-progressbar/dist/styles.css";
import ProgressBar from "./ProgressBar";

// Tabbed Content Container
const TabbedContainer = props => {
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

                .CircularProgressbar-path {
                    stroke: rgb(69, 166, 215) !important;
                }

                .CircularProgressbar-trail {
                    stroke: #26607D !important;
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
                            <h2 style={{ marginTop: "3%" }}>
                                ABOUT VICTIM SERVICES WELLINGTON (VSW)
                            </h2>
                            <p>
                                Anyone can be a victim. It is in times of trauma
                                that victims need compassion, support, and
                                assistance most. Whether an accident has
                                occurred, a crime committed, or a loss suffered.
                                Victim Services Wellinton (VSW) is available 24
                                hours a day, 7 days a week, all year round to
                                support victims.
                            </p>

                            <p>
                                A non-profit organization, established in 1997,
                                VSW has partnerships with Guelph Police Services
                                and the Ontario Provinicial Police to deliver
                                support to victims of crime in our area.
                                Volunteers are available on scene to help
                                victims and their families through difficult
                                events and refer them to appropriate community
                                groups and organizations.
                            </p>
                            <p>
                                VSW volunteers are trained extensively to help
                                meet the short-term needs of victims. They are
                                backed with widespread knowledge and experience
                                in communication, crisis interpresence to what
                                can be highly emotional, stressful, and
                                overwhelming circumstances.
                            </p>

                            <h2>CONTACT VICTIM SERVICES WELLINGTON (VSW)</h2>

                            <p style={{ textAlign: "center" }}>
                                15 Wyndam Street South
                                <br />
                                Guelph, Ontario
                                <br />
                                N1H 4C6
                            </p>

                            <LineBreak />
                            <p style={{ textAlign: "center" }}>
                                <strong>Phone:</strong> (519) 824-1212 ext 7304
                                <br />
                                <strong>Email:</strong> victim@vswguelph.on.ca
                            </p>
                            <LineBreak />
                            <p style={{ textAlign: "center" }}>
                                <strong>Office Hours</strong>
                                <br />
                                Monday to Friday from
                                <br />
                                9am to 5pm
                            </p>
                        </Tab>

                        {/* CHARITY STATS TAB */}

                        <Tab eventKey="statistics" title="Statistics">
                            <h2
                                style={{ marginTop: "3%", textAlign: "center" }}
                            >
                                CHARITY AND DONATEABLE STATISTICS
                            </h2>
                            <img
                                src="/img/charity/Victim-Services.png"
                                style={{ width: "50%", margin: "auto" }}
                            />
                            <h2> VICTIM SERVICES WELLINGTON </h2>
                            <h2> STATISTICS </h2>

                            <ProgressBar
                                label="2"
                                percentage={22}
                                title="CURRENTLY DONATING"
                            />
                            <ProgressBar
                                label="34"
                                percentage={56}
                                title="DONATORS TO DATE"
                            />
                            <ProgressBar
                                label="62M"
                                percentage={70}
                                title="TOTAL HASHES"
                                details="62 406 532"
                            />

                            <LineBreak />

                            <img
                                src="/img/logo/D-Coloured-250x250.png"
                                style={{ width: "25%", margin: "auto" }}
                            />
                            <h2> DONATEABLE </h2>
                            <h2> STATISTICS </h2>

                            <ProgressBar
                                label="15"
                                percentage={34}
                                title="CURRENTLY DONATING"
                            />
                            <ProgressBar
                                label="66"
                                percentage={363}
                                title="DONATORS TO DATE"
                            />
                            <ProgressBar
                                label="3B"
                                percentage={82}
                                title="TOTAL HASHES"
                                details="3 916 406 532"
                            />

                        </Tab>

                        {/* DONATION TARGETS TAB */}

                        <Tab eventKey="targets" title="Targets">
                            <h2>Donation Targets</h2>
                            <IconAndText
                                icon={faBatteryHalf}
                                size="5x"
                                rotation={270}
                                num={1}
                                bodytext="LIFE SAVER BRACLET. A small battery used in the Lifesaver Bracelet allowing the system to operate everyday of the year."
                            />
                            <LineBreak />
                            <IconAndText
                                icon={faHandHoldingHeart}
                                size="5x"
                                num={2}
                                bodytext="VOLUNTEER TRAINING Responsible for immediate mobile response to requests from emergency and police services within Wellington County."
                            />
                            <LineBreak />
                            <IconAndText
                                icon={faAmbulance}
                                size="5x"
                                num={3}
                                bodytext="LIFESAVER BRACELET COST = $400= 40,000,000,000 HASHES. A one ounce wrist transmitter that sends a radio signal which can be tracked up to a 2 kilometer radius."
                            />
                        </Tab>

                        {/* DONATE NOW TAB */}

                        <Tab eventKey="donate-now" title="Donate Now">
                            <h2>DONATE NOW</h2>
                            {/* 
                            <ProgressBarCircle
                                percentage="0"
                                barText="0"
                                title="HASHING RATE"
                                details="0 PER SECOND"
                            />
                            <ProgressBarCircle
                                percentage="0"
                                barText="0"
                                title="TOTAL TIME"
                                details="0 SECONDS"
                            />
                            <ProgressBarCircle
                                percentage="0"
                                barText="0"
                                title="TOTAL HASHES"
                                details="# 0"
/> */}
                        </Tab>
                    </Tabs>
                </Row>
            </Container>
        </div>
    );
};

export default TabbedContainer;
