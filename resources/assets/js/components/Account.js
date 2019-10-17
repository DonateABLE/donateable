import React, { Component } from "react";
import SocialLinks from "./Account/SocialLinks";
import ProfilePic from "./Account/ProfilePic";
import TabbedUser from "./Account/TabbedUser";
import Navigation from "./Navbar";

class Account extends Component {
    componentDidMount() {
        window.scrollTo(0, 0); // Scroll to the top when routing 
    }
    
    render() {
        return (
            <div
                id="account"
                style={{
                    minHeight: "100vh",
                    maxHeight: "100%",
                    overflow: "auto"
                }}
            >
                <Navigation />
                <ProfilePic
                    userImage="/img/profilepix.jpeg"
                    userName="LUKE PRITCHARD"
                />

                <SocialLinks
                    userFb="https://facebook.com"
                    userTwitter="https://twitter.com"
                    userSite="https://google.ca"
                />
                <TabbedUser />
            </div>
        );
    }
}

export default Account;
