import React, { Component } from "react";
import { Button, ButtonGroup, Modal, Container } from "react-bootstrap";
import ModalText from "./Modals/ModalText";
import TwoItems from "./Modals/TwoItems";
import WhiteButton from "./Modals/WhiteButton";
import PrivacyPolicy from "./Modals/PrivacyPolicy";
import FAQ from "./Modals/FAQ/FAQ";
import Tour from "./Modals/Tour/Tour";
import { NavLink } from "react-router-dom";
import TechSupport from "./Modals/Contact/TechSupport";
import JoinProgram from "./Modals/Contact/JoinProgram";

// This component is for the collection of buttons that pull down
// in the hamburger menu

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
                <Modal
                    size="lg"
                    show={this.state.showAbout}
                    onHide={this.handleHideAbout}
                >
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
                            donateABLE is a website designed, developed, and
                            managed by Synergenics, a professional IT support
                            and solutions provider to Guelph and Southwestern
                            Ontario for over 30 years. Their 30 years of service
                            has allowed them to build relationships with many
                            companies in a variety of different industries, but
                            some of their most cherished relationships are with
                            local Guelph charities and organizations.
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
                            donateABLE is a website project developed and
                            managed by Synergenics. This solution will take
                            small amounts of computational power donated from
                            individuals and pool it together into a larger
                            resource to generate real monetary value for your
                            charity. This website is going to allow anyone with
                            a computer to make a difference no matter what their
                            financial situation is, by donating unused computer
                            time.
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
                            past 30 years, to give back to their local community
                            in any way they can. They have done this by
                            providing discounted IT support, sponsoring local
                            youth organizations, and donating and sponsoring
                            local golf tournaments. Now they are combining their
                            passion and knowledge in the IT world with their
                            passion of giving back to create a solution that
                            makes a difference.
                        </p>

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
                            Show={this.handleShowHIW}
                            Hide={this.handleHideAbout}
                            buttonText="LEARN HOW DONATEABLE WORKS"
                        />
                    </Modal.Body>
                </Modal>

                {/* HOW IT WORKS MODAL*/}

                <Modal
                    size="lg"
                    show={this.state.showHIW}
                    onHide={this.handleHideHIW}
                >
                    <Modal.Header
                        style={{
                            backgroundColor: "#45A6D7",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            paddingTop: "25px",
                            paddingBottom: "0px"
                        }}
                        closeButton
                    >
                        <Modal.Title
                            id="example-custom-modal-styling-title"
                            className="text-center"
                            style={{ color: "#FFFFFF", paddingLeft: "30px" }}
                        />
                    </Modal.Header>

                    <Modal.Body
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            paddingTop: "0px",
                            paddingBottom: "10px"
                        }}
                    >
                        <img
                            src="/img/logo/donateABLE-long-white-500.png"
                            style={{ width: "70%" }}
                        />

                        <ModalText
                            fontSize1={16}
                            fontSize2={16}
                            text1="USE YOUR COMPUTER POWER TO GENERATE"
                            text2="MONEY FOR YOUR CHOSEN CHARITY"
                            style={{ width: "100%", fontWeight: "500" }}
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

                        <TwoItems
                            imgSrc="/img/howto/1.png"
                            text="SELECT YOUR CHARITY"
                        />
                        <p style={{ color: "#FFFFFF" }}>
                            The first step is the easiest, or the hardest
                            depending on how you look at it, which is selecting
                            the charity you would like to donate to. Simply
                            select a charity out of our provided list that you
                            wish to donate to and begin lending your computer's
                            processor to solve complex algorithms. It's easy and
                            anyone with a computer is able to donate.
                        </p>

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
                            imgSrc="/img/howto/2.png"
                            text="SELECT YOUR POWER"
                        />
                        <p style={{ color: "#FFFFFF" }}>
                            The second step is setting the amount of processing
                            power you would like to donate. Basically, the more
                            processor power you donate, the more algorithms get
                            solved, which is then translated into digital
                            currency that is then converted into real money to
                            help your charity continue to do good in their
                            community.
                        </p>

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
                            imgSrc="/img/howto/3.png"
                            text="START DONATING"
                        />

                        <p style={{ color: "#FFFFFF" }}>
                            The third step is the easiest. Now that you have
                            selected your charity and set your processing power
                            you are now ready to start donating. Select the
                            start button and carry on with your day. You can
                            browse websites, go walk the dog, or take a trip. No
                            matter what you do just leave donateABLE on and
                            running and we do the rest.
                        </p>
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
                        <NavLink to="/charities" onClick={this.handleHideHIW}>
                            <WhiteButton
                                Hide={this.handleHideHIW}
                                buttonText="START DONATING"
                            />
                        </NavLink>
                    </Modal.Body>
                </Modal>

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
                <Modal
                    size="lg"
                    show={this.state.showContact}
                    onHide={this.handleHideContact}
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
                            donateABLE? Simply fill out the form below and a
                            member of our team will be in touch with the next
                            steps.
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
                            functionality or have a technical question please
                            fill out the form below to submit a ticket. A member
                            of our team will get back to you within 48 business
                            hours.
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
                            Show={this.handleShowFAQ}
                            Hide={this.handleHideContact}
                            buttonText="VIEW FREQUENTLY ASKED QUESTIONS"
                        />
                    </Modal.Body>
                </Modal>

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
                <Modal
                    size="lg"
                    show={this.state.showTour}
                    onHide={this.handleHideTour}
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
                        <Tour click={this.handleHideTour} />
                    </Modal.Body>
                </Modal>

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
