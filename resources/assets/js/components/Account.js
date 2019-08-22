import React, { Component } from "react";
import SocialLinks from "./Account/SocialLinks";
import ProfilePic from "./Account/ProfilePic";
import TabbedUser from "./Account/TabbedUser";
import Navigation from "./Navbar";

class Account extends Component {
    render() {
        return (
            <div>
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
