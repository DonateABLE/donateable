import React, { Component } from "react";
import { Button, ButtonGroup, Modal, Container } from "react-bootstrap";
import ModalText from "./Modals/ModalText";
import TwoItems from "./Modals/TwoItems";
import WhiteButton from "./Modals/WhiteButton";
import PrivacyPolicy from "./Modals/PrivacyPolicy";
import FAQ from "./Modals/FAQ/FAQ";
import TourModal from "./Modals/Tour/TourModal";
import { NavLink } from "react-router-dom";
import TechSupport from "./Modals/Contact/TechSupport";
import JoinProgram from "./Modals/Contact/JoinProgram";
import HowItWorksModal from "./Modals/HowItWorks/HowItWorksModal";
import ContactUSModal from "./Modals/Contact/ContactUsModal";
import AboutModal from "./Modals/About/AboutModal";

// This component is for the collection of buttons that pull down
// in the hamburger menu
// Sorry if this is a terribly written component

class ButtonGrouping extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            /* init states */
            showAbout: false,
            showHIW: false,
            showPP: false,
            showContact: false,
            showFAQ: false,
            showTour: false
        };
    }

    /* State Handling Functions */

    // About
    handleShowAbout = () => {
        this.setState({ showAbout: true });
    };

    handleHideAbout = () => {
        this.setState({ showAbout: false });
    };

    // How it Works
    handleShowHIW = () => {
        this.setState({ showHIW: true });
    };

    handleHideHIW = () => {
        this.setState({ showHIW: false });
    };

    // Privacy Policy
    handleShowPP = () => {
        this.setState({ showPP: true });
    };

    handleHidePP = () => {
        this.setState({ showPP: false });
    };

    // Contact
    handleShowContact = () => {
        this.setState({ showContact: true });
    };

    handleHideContact = () => {
        this.setState({ showContact: false });
    };

    // Frequently Asked Questions
    handleShowFAQ = () => {
        this.setState({ showFAQ: true });
    };

    handleHideFAQ = () => {
        this.setState({ showFAQ: false });
    };

    // Take a Tour
    handleShowTour = () => {
        this.setState({ showTour: true });
    };

    handleHideTour = () => {
        this.setState({ showTour: false });
    };

    render() {
        return (
            <div className="text-center">
                <style className="text/css">
                    {`                 
                   .btn-turqgroup {
                    background-color: #45A6D7;
                    border-top-color: white;
                    border-bottom-color: white;
                    border-right-color: #45A6D7;
                    border-left-color: #45A6D7;
                    border-radius: 0;
                    color: white;
                    vertical-align: middle;
                    font-weight: 500;
                    letter-spacing: 0.05em;
                    font-family: 'Montserrat-Bold', sans-serif;
                    width: 305px;
                    height: 48px;
                    font-size: 10pt;
                  }

                  .btn-join{
                    background-color: #26607D;
                    border-color: #979797;
                    border-radius: 0;
                    color: white;
                    font-weight: 500;
                    letter-spacing: 0.05em;
                    font-family: 'Montserrat-Bold', sans-serif;
                    margin-bottom: 4%;
                    padding-left: 8%;
                    padding-right: 8%;
                    width: 305px;
                    font-size: 10pt;
                  }

                  .modal-content {
                    background-color: #45A6D7;
                  }

                  .modal-body {
                    background-color: #45A6D7;
                    display: flex;
                    justify-content: center; 
                    align-items: center;
                    padding-top: 0px;
                    padding-bottom: 0px;
                    height: 100%;
                  }
          `}
                </style>
                <ButtonGroup
                    vertical
                    style={{ width: "305px", marginTop: "3%" }}
                >
                    <NavLink to="/">
                        <Button variant="turqgroup" size="lg">
                            HOME
                        </Button>
                    </NavLink>
                    <Button
                        variant="turqgroup"
                        size="lg"
                        onClick={this.handleShowAbout}
                    >
                        ABOUT
                    </Button>
                    <Button
                        variant="turqgroup"
                        size="lg"
                        onClick={this.handleShowHIW}
                    >
                        HOW IT WORKS
                    </Button>
                    <NavLink to="/charities">
                        <Button variant="turqgroup" size="lg">
                            CHARITIES
                        </Button>
                    </NavLink>
                    <Button
                        variant="turqgroup"
                        size="lg"
                        onClick={this.handleShowPP}
                    >
                        PRIVACY POLICY
                    </Button>
                    <Button
                        variant="turqgroup"
                        size="lg"
                        onClick={this.handleShowContact}
                    >
                        CONTACT
                    </Button>
                    <Button
                        variant="turqgroup"
                        size="lg"
                        onClick={this.handleShowFAQ}
                    >
                        FAQ
                    </Button>
                    <Button
                        variant="turqgroup"
                        size="lg"
                        onClick={this.handleShowTour}
                    >
                        TAKE A TOUR
                    </Button>
                </ButtonGroup>

                {/* This is the Beginning of the modals that will be rendered */}
                <AboutModal
                    show={this.state.showAbout}
                    showNext={this.handleShowHIW}
                    hide={this.handleHideAbout}
                />

                {/* HOW IT WORKS MODAL*/}
                <HowItWorksModal
                    show={this.state.showHIW}
                    hide={this.handleHideHIW}
                />

                {/* PRIVACY POLICY MODAL */}

                <Modal
                    size="lg"
                    show={this.state.showPP}
                    onHide={this.handleHidePP}
                >
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
                    </Modal.Body>
                    <Modal.Body>
                        <ModalText fontSize1={25} text1="PRIVACY POLICY" />
                        <PrivacyPolicy />
                        <WhiteButton
                            Show={this.handleShowContact}
                            Hide={this.handleHidePP}
                            buttonText="HAVE QUESTIONS? CONTACT US"
                        />
                    </Modal.Body>
                </Modal>

                {/* CONTACT US MODAL */}
                <ContactUSModal
                    showNext={this.handleShowFAQ}
                    show={this.state.showContact}
                    hide={this.handleHideContact}
                />

                <Modal
                    size="lg"
                    show={this.state.showFAQ}
                    onHide={this.handleHideFAQ}
                >
                    <Modal.Header closeButton>
                        <Modal.Title
                            id="example-custom-modal-styling-title"
                            className="text-center"
                        >
                            Frequently Asked Questions
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FAQ />
                    </Modal.Body>
                </Modal>

                {/* TAKE A TOUR*/}
                <TourModal
                    show={this.state.showTour}
                    hide={this.handleHideTour}
                />

                {/* FREQUENTLY ASKED QUESTIONS */}

                <Modal
                    size="lg"
                    show={this.state.showFAQ}
                    onHide={this.handleHideFAQ}
                >
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
                            marginBottom: "15%",
                            paddingTop: "0px",
                            paddingBottom: "0px"
                        }}
                    >
                        <img
                            src="/img/logo/donateABLE-long-white-500.png"
                            style={{ width: "70%" }}
                        />
                        <ModalText
                            fontSize1={20}
                            text1="FREQUENTLY ASKED QUESTIONS"
                        />
                        <Container
                            style={{ marginTop: "10%", marginBottom: "10%" }}
                        >
                            <FAQ style={{ width: "100%" }} />
                            <br />
                        </Container>
                        <WhiteButton
                            Show={this.handleShowContact}
                            Hide={this.handleHideFAQ}
                            buttonText="MORE QUESTIONS? CONTACT US"
                        />
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

export default ButtonGrouping;
