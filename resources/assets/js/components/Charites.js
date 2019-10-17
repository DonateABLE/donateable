import React, { Component } from "react";
import CharityCards from "./Charities/CharityCards";
import CharityText from "./Charities/CharityText";
import Navigation from "./Navbar";
import { Container } from "react-bootstrap";

class Charities extends Component {
    componentDidMount() {
        window.scrollTo(0, 0); // Scroll to the top when routing 
    }
    
    render() {
        return (
            <div
                id="charities"
                style={{
                    minHeight: "100vh",
                    maxHeight: "100%",
                    overflow: "auto"
                }}
            >
                <Navigation />
                <Container style={{ background: "white", paddingBottom: "5%" }}>
                    <CharityText
                        text1="SUPPORT LOCAL CHARITIES IN GUELPH"
                        text2="WITHOUT OPENING YOUR WALLET"
                    />
                    <CharityCards
                        charityName="DONATEABLE"
                        image="/img/charity/donateable-charity.png"
                        facebookLink="https://www.facebook.com"
                        twitterLink="https://twitter.com"
                        siteLink="https://www.donateable.ca"
                    />
                    <CharityCards
                        charityName="VICTIM SERVICES WELLINGTON"
                        image="/img/charity/Victim-Services.png"
                        facebookLink="https://www.facebook.com/www.vswguelph.on.ca/"
                        twitterLink="https://twitter.com/VS_Wellington"
                        siteLink="https://www.vswguelph.on.ca/"
                        donateLink="/wvs"
                    />
                    <CharityCards charityName="COMING SOON" />
                </Container>
            </div>
        );
    }
}

export default Charities;
