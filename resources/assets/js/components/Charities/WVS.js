import React, { Component } from "react";
import CharityTemplate from "./Content/CharityTemplate";
import Navigation from "../Navbar";

class WVS extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <CharityTemplate />
            </div>
        );
    }
}

export default WVS;
