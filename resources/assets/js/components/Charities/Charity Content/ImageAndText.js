import React from "react";
import { Container, Col } from "react-bootstrap";

/* This component is meant to render the two items and text
   that will occur in every tab on the Charities pages. Like
   the currently donating image and text side by side */

const ImageAndText = props => {
    return (
        <div>
            <style>
                {`
                    .img {
                        width: 100%;
                        margin: auto;
                    }
                `}
            </style>
        <Container
            style={{
                backgroundColor: "white",
                color: "#26607D",
                display: "flex",
                paddingLeft: "0",
                paddingRight: "0",
                paddingTop: "3%",
                paddingBottom: "3%"
            }}
        >
            <Col
                md="auto"
                style={{
                    paddingLeft: "0",
                    paddingRight: "0"
                }}
            >
                <div style={{margin: "auto"}}>
                    <img
                        src={props.image}
                        style={{width: "100%", margin: "auto"}}
                    />
                </div>
            </Col>

            <Col
                xs={7}
                style={{
                    paddingLeft: "0",
                    paddingRight: "0"
                }}
            >
                <div style={{ textAlign: "left", margin: "auto" }}>
                    <p>
                        <strong>{props.num}</strong>
                        <br />
                        {props.bodytext}
                    </p>
                </div>
            </Col>
        </Container>
        </div>
    );
};

export default ImageAndText;
