import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import TechSupport from "./TechSupport";
import JoinProgram from "./JoinProgram";
import ModalText from "../ModalText";
import WhiteButton from "../WhiteButton";

class ContactUsModal extends Component {
    render() {
        return (
            <Modal size="lg" show={this.props.show} onHide={this.props.hide}>
                <Modal.Header closeButton>
                    <Modal.Title
                        id="example-custom-modal-styling-title"
                        className="text-center"
                    />
                </Modal.Header>

                <Modal.Body
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        paddingTop: "0px",
                        paddingBottom: "0px"
                    }}
                >
                    <img
                        src="/img/logo/donateABLE-long-white-500.png"
                        style={{ width: "70%" }}
                    />
                    <ModalText
                        style={{ marginBottom: "10%" }}
                        fontSize1={20}
                        fontSize2={14}
                        text1="THANK YOU FOR VISITING"
                        text2="WE WOULD LIKE TO HEAR FROM YOU"
                    />

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

                    {/* JOIN THE PROGRAM */}
                    <img
                        src="/img/contactus/Contact-Us-Join-the-Program.png"
                        style={{ width: "80%" }}
                    />

                    <p style={{ color: "#FFFFFF" }}>
                        Are you a local, Guelph and Wellington County,
                        non-profit charity that would like to be featured on
                        donateABLE? Simply fill out the form below and a member
                        of our team will be in touch with the next steps.
                    </p>

                    <JoinProgram variant="join" />

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

                    {/* Technical Support */}
                    <img
                        src="/img/contactus/Contact-Us-Technical-Support.png"
                        style={{ width: "80%" }}
                    />
                    <p style={{ color: "#FFFFFF" }}>
                        If you are having any problems with the site
                        functionality or have a technical question please fill
                        out the form below to submit a ticket. A member of our
                        team will get back to you within 48 business hours.
                    </p>

                    <TechSupport variant="join" />

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
                        buttonText="VIEW FREQUENTLY ASKED QUESTIONS"
                    />
                </Modal.Body>
            </Modal>
        );
    }
}

export default ContactUsModal;
