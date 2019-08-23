import React, { Component } from "react";
import TourCarousel from "./TourCarousel";
import { Modal } from "react-bootstrap";

class TourModal extends Component {
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
                    <TourCarousel click={this.props.hide} />
                </Modal.Body>
            </Modal>
        );
    }
}

export default TourModal;
