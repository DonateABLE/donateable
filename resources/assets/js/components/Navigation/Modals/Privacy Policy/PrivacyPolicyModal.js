import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import ModalText from "../ModalText";
import WhiteButton from "../WhiteButton";
import PrivacyPolicy from "./PrivacyPolicy";

class PrivacyPolicyModal extends Component {
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
                </Modal.Body>
                <Modal.Body>
                    <ModalText fontSize1={25} text1="PRIVACY POLICY" />
                    <PrivacyPolicy />
                    <WhiteButton
                        Show={this.props.showNext}
                        Hide={this.props.hide}
                        buttonText="HAVE QUESTIONS? CONTACT US"
                    />
                </Modal.Body>
            </Modal>
        );
    }
}

export default PrivacyPolicyModal;
