import React, { Component } from "react";
import { Button, ButtonGroup, Modal, Container } from "react-bootstrap";
import ModalText from "./Modals/ModalText";
import TwoItems from "./Modals/TwoItems";
import WhiteButton from "./Modals/WhiteButton";
import PrivacyPolicy from "./Modals/Privacy Policy/PrivacyPolicy";
import FAQ from "./Modals/FAQ/FAQ";
import TourModal from "./Modals/Tour/TourModal";
import { Link } from "react-router-dom";
import TechSupport from "./Modals/Contact/TechSupport";
import JoinProgram from "./Modals/Contact/JoinProgram";
import HowItWorksModal from "./Modals/HowItWorks/HowItWorksModal";
import ContactUSModal from "./Modals/Contact/ContactUsModal";
import AboutModal from "./Modals/About/AboutModal";
import PrivacyPolicyModal from "./Modals/Privacy Policy/PrivacyPolicyModal";
import FAQModal from "./Modals/FAQ/FAQModal";

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
                    <Link to="/">
                        <Button variant="turqgroup" size="lg">
                            HOME
                        </Button>
                    </Link>
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
                    <Link to="/charities">
                        <Button variant="turqgroup" size="lg">
                            CHARITIES
                        </Button>
                    </Link>
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
                    hide={this.handleHideAbout}
                    showNext={this.handleShowHIW}
                />

                {/* HOW IT WORKS MODAL*/}
                <HowItWorksModal
                    show={this.state.showHIW}
                    hide={this.handleHideHIW}
                />

                {/* PRIVACY POLICY MODAL */}
                <PrivacyPolicyModal
                    show={this.state.showPP}
                    hide={this.handleHidePP}
                    showNext={this.handleShowContact}
                />

                {/* CONTACT US MODAL */}
                <ContactUSModal
                    show={this.state.showContact}
                    hide={this.handleHideContact}
                    showNext={this.handleShowFAQ}
                />

                {/* TAKE A TOUR*/}
                <TourModal
                    show={this.state.showTour}
                    hide={this.handleHideTour}
                />

                {/* FREQUENTLY ASKED QUESTIONS */}
                <FAQModal
                    show={this.state.showFAQ}
                    hide={this.handleHideFAQ}
                    showNext={this.handleShowContact}
                />
            </div>
        );
    }
}

export default ButtonGrouping;
