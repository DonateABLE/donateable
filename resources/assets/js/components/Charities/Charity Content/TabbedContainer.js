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
                            <p style={{ textAlign: "center", margin: "auto" }}>
                                Statistics
                            </p>
                            <ImageAndText
                                image="/img/charity/Victim-Services.png"
                                bodytext="This is some body text to fill up a bunch of space for the component"
                                num={1}
                            />
                            <ImageAndText
                                image="/img/charity/Victim-Services.png"
                                bodytext="This is some body text to fill up a bunch of space for the component"
                                num={2}
                            />
                            <ImageAndText
                                image="/img/charity/Victim-Services.png"
                                bodytext="This is some body text to fill up a bunch of space for the component"
                                num={3}
                            />
                        </Tab>
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
                        <Tab eventKey="donate-now" title="Donate Now">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Dolor sed viverra ipsum nunc
                            aliquet bibendum enim. In massa tempor nec feugiat.
                            Nunc aliquet bibendum enim facilisis gravida. Nisl
                            nunc mi ipsum faucibus vitae aliquet nec
                            ullamcorper. Amet luctus venenatis lectus magna
                            fringilla. Volutpat maecenas volutpat blandit
                            aliquam etiam erat velit scelerisque in. Egestas
                            egestas fringilla phasellus faucibus scelerisque
                            eleifend. Sagittis orci a scelerisque purus semper
                            eget duis. Nulla pharetra diam sit amet nisl
                            suscipit. Sed adipiscing diam donec adipiscing
                            tristique risus nec feugiat in. Fusce ut placerat
                            orci nulla. Pharetra vel turpis nunc eget lorem
                            dolor. Tristique senectus et netus et malesuada.
                        </Tab>
                    </Tabs>
                </Row>
            </Container>
        </div>
    );
};

export default TabbedContainer;
