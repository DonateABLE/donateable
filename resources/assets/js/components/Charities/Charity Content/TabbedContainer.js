import React from "react";
import { Tabs, Tab, Container, Row, Button } from "react-bootstrap";
import LineBreak from "./LineBreak";

// Tabbed Content Container
const TabbedContainer = props => {
    return (
        <div>
            <style>
                {`
                .nav-link {
                    padding: 10px;
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
                    marginLeft: "0",
                    marginRight: "0",
                    justifyContent: "center"
                }}
            >
                <Row style={{ width: "100%" }}>
                    <Button variant="turqdark"> MONETARY DONATION</Button>
                </Row>

                <Row style={{ width: "100%", color: "black" }}>
                    <Tabs defaultActiveKey="about" id="charity-tabs">
                        <Tab eventKey="about" title=" &nbsp;About&nbsp; ">
                            <h2>ABOUT VICTIM SERVICES WELLINGTON (VSW)</h2>
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

                            <p style={{textAlign: "center"}}>
                                15 Wyndam Street South
                                <br />
                                Guelph, Ontario
                                <br />
                                N1H 4C6
                            </p>

                            <LineBreak />
                            <p style={{textAlign: "center"}}>
                                <strong>Phone:</strong> (519) 824-1212 ext 7304
                                <br />
                                <strong>Email:</strong> victim@vswguelph.on.ca
                            </p>
                            <LineBreak />
                            <p style={{textAlign:"center"}}>
                                <strong>Office Hours</strong>
                                <br />
                                Monday to Friday from
                                <br />
                                9am to 5pm
                            </p>
                        </Tab>
                        <Tab
                            eventKey="statistics"
                            title=" &nbsp;Statistics&nbsp; "
                        >
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
                        <Tab eventKey="targets" title="  &nbsp;Targets&nbsp;  ">
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
                        <Tab
                            eventKey="donate-now"
                            title="  &nbsp;Donate Now&nbsp;  "
                        >
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
