import React from "react";
import { Tabs, Tab, Container, Row, Button } from "react-bootstrap";

// Tabbed Content Container
const TabbedContainer = props => {
    return (
        <div>
            <style>
                {`
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
                        <Tab eventKey="about" title="About">
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
                        <Tab eventKey="statistics" title="Statistics">
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
                        <Tab eventKey="targets" title="Targets">
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
