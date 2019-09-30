import React, { Component } from "react";
import CharityTemplate from "./Content/CharityTemplate";
import Navigation from "../Navbar";

class WVS extends Component {

    componentDidMount() {
        window.scrollTo(0, 0); // Scroll to the top when routing 
    }
    
    render() {
        return (
            <div
                style={{
                    minHeight: "100vh",
                    maxHeight: "100%",
                    overflow: "auto"
                }}
            >
                <Navigation />
                <CharityTemplate />
            </div>
        );
    }
}

export default WVS;
