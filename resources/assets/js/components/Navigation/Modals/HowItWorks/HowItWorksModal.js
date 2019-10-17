import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import TwoItems from "../TwoItems";
import ModalText from "../ModalText";
import WhiteButton from "../WhiteButton";

class HowItWorksModal extends Component {
    render() {
        return (
            <Modal
                size="lg"
                show={this.props.show}
                onHide={this.props.hide}
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
                        The first step is the easiest, or the hardest depending
                        on how you look at it, which is selecting the charity
                        you would like to donate to. Simply select a charity out
                        of our provided list that you wish to donate to and
                        begin lending your computer's processor to solve complex
                        algorithms. It's easy and anyone with a computer is able
                        to donate.
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
                        solved, which is then translated into digital currency
                        that is then converted into real money to help your
                        charity continue to do good in their community.
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
                    <TwoItems imgSrc="/img/howto/3.png" text="START DONATING" />

                    <p style={{ color: "#FFFFFF" }}>
                        The third step is the easiest. Now that you have
                        selected your charity and set your processing power you
                        are now ready to start donating. Select the start button
                        and carry on with your day. You can browse websites, go
                        walk the dog, or take a trip. No matter what you do just
                        leave donateABLE on and running and we do the rest.
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
                    <Link to="/charities" onClick={this.props.hide}>
                        <WhiteButton
                            Hide={this.props.hide}
                            buttonText="START DONATING"
                        />
                    </Link>
                </Modal.Body>
            </Modal>
        );
    }
}

export default HowItWorksModal;
