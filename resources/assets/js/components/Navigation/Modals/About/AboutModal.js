import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import ModalText from "../ModalText";
import TwoItems from "../TwoItems";
import WhiteButton from "../WhiteButton";

class AboutModal extends Component {
    render() {
        return (
            <Modal size="lg" show={this.props.show} onHide={this.props.hide}>
                <Modal.Header
                    style={{
                        backgroundColor: "#45A6D7",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        paddingTop: "5%",
                        paddingBottom: "3.5%"
                    }}
                    closeButton
                >
                    <Modal.Title
                        id="example-custom-modal-styling-title"
                        className="text-center"
                        style={{ color: "#FFFFFF", paddingLeft: "17%" }}
                    />
                </Modal.Header>

                <Modal.Body
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        maxHeight: "calc(100vh-210px)",
                        overflowY: "auto",
                        paddingBottom: "5%"
                    }}
                >
                    <img
                        src="/img/logo/donateABLE-long-white-500.png"
                        style={{ width: "70%" }}
                    />

                    <ModalText
                        fontSize1={16}
                        fontSize2={16}
                        text1="THE WHO, WHAT & WHYS OF DONATEABLE"
                        text2="THE NEWEST AND EASIEST WAY TO DONATE"
                        style={{
                            paddingTop: "40%",
                            width: "100%",
                            fontWeight: "500",
                            paddingLeft: "2%",
                            paddingRight: "2%"
                        }}
                    />

                    {/* WHO */}

                    <hr
                        width={"69%"}
                        style={{
                            display: "block",
                            height: "1px",
                            border: 0,
                            borderTop: "1px solid #FFFFFF",
                            marginTop: "4%",
                            padding: 0
                        }}
                    />
                    <TwoItems
                        imgSrc="/img/aboutus/About-Us-WHO.png"
                        text="IS DONATEABLE DEVELOPED BY"
                    />
                    <p>
                        donateABLE is a website designed, developed, and managed
                        by Synergenics, a professional IT support and solutions
                        provider to Guelph and Southwestern Ontario for over 30
                        years. Their 30 years of service has allowed them to
                        build relationships with many companies in a variety of
                        different industries, but some of their most cherished
                        relationships are with local Guelph charities and
                        organizations.
                    </p>

                    {/* WHAT */}
                    <hr
                        width={"69%"}
                        style={{
                            display: "block",
                            height: "1px",
                            border: 0,
                            borderTop: "1px solid #FFFFFF",
                            marginTop: "4%",
                            padding: 0
                        }}
                    />
                    <TwoItems
                        imgSrc="/img/aboutus/About-Us-WHAT.png"
                        text="IS DONATEABLE"
                    />
                    <p style={{ color: "#FFFFFF" }}>
                        donateABLE is a website project developed and managed by
                        Synergenics. This solution will take small amounts of
                        computational power donated from individuals and pool it
                        together into a larger resource to generate real
                        monetary value for your charity. This website is going
                        to allow anyone with a computer to make a difference no
                        matter what their financial situation is, by donating
                        unused computer time.
                    </p>

                    {/* WHY */}
                    <hr
                        width={"69%"}
                        style={{
                            display: "block",
                            height: "1px",
                            border: 0,
                            borderTop: "1px solid #FFFFFF",
                            marginTop: "4%",
                            padding: 0
                        }}
                    />
                    <TwoItems
                        imgSrc="/img/aboutus/About-Us-WHY.png"
                        text="WAS DONATEABLE DEVELOPED"
                    />
                    <p style={{ color: "#FFFFFF" }}>
                        Synergenics has consistently made an effort, for the
                        past 30 years, to give back to their local community in
                        any way they can. They have done this by providing
                        discounted IT support, sponsoring local youth
                        organizations, and donating and sponsoring local golf
                        tournaments. Now they are combining their passion and
                        knowledge in the IT world with their passion of giving
                        back to create a solution that makes a difference.
                    </p>
                    
                    {/* These components are the divider lines */}
                    <hr
                        width={"69%"}
                        style={{
                            display: "block",
                            height: "1px",
                            border: 0,
                            borderTop: "1px solid #FFFFFF",
                            marginTop: "4%",
                            padding: 0
                        }}
                    />
                    <WhiteButton
                        Show={this.props.showNext}
                        Hide={this.props.hide}
                        buttonText="LEARN HOW DONATEABLE WORKS"
                    />
                </Modal.Body>
            </Modal>
        );
    }
}

export default AboutModal;
