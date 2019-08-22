import React, { Component } from "react";
import SocialLinks from "./Account/SocialLinks";
import ProfilePic from "./Account/ProfilePic";
import TabbedUser from "./Account/TabbedUser";

class Account extends Component {
    render() {
        return (
            <div>
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
