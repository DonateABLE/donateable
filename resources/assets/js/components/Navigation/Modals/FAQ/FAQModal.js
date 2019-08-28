import React, { Component } from "react";
import { Modal, Container } from "react-bootstrap";
import ModalText from "../ModalText";
import WhiteButton from "../WhiteButton";
import FAQ from "./FAQ";

class FAQModal extends Component {
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
                        Show={this.props.showNext}
                        Hide={this.props.hide}
                        buttonText="MORE QUESTIONS? CONTACT US"
                    />
                </Modal.Body>
            </Modal>
        );
    }
}

export default FAQModal;
