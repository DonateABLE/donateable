import React from "react";
import { Container, Image } from "react-bootstrap";

const ProfilePic = props => {
    return (
        <Container
            style={{
                backgroundColor: "#45A6D7",
                textAlign: "center",
                color: "white",
                fontWeight: "400",
                fontSize: "3vh",
                padding: "2%"
            }}
        >
            <Image
                src={props.userImage}
                roundedCircle
                style={{ margin: "auto", height: "25%", width: "25%" }}
            />
            <br />
            {props.userName}
        </Container>
    );
};

export default ProfilePic;
