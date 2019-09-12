import React, { Component } from "react";
import CharityTemplate from "./Content/CharityTemplate";
import Navigation from "../Navbar";

class WVS extends Component {
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
