import React from "react";
import { Container, Image } from "react-bootstrap";

const ProfilePic = props => {
    return (
        <Container>
            <Image src={props.userImage} rounded />
            <h2>props.userName</h2>
        </Container>
    );
};

export default ProfilePic;
