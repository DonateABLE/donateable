import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import TourModal from "../Navigation/Modals/Tour/TourModal";
import HowItWorksModal from "../Navigation/Modals/HowItWorks/HowItWorksModal";
import axios from "axios";

class Buttons extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            showHIW: false,
            showTour: false,
            totalHashes: 0
        };
    }

    /* State Handling Functions */

    // How it Works
    handleShowHIW = () => {
        this.setState({ showHIW: true });
    };

    handleHideHIW = () => {
        this.setState({ showHIW: false });
    };

    // Take a Tour
    handleShowTour = () => {
        this.setState({ showTour: true });
    };

    handleHideTour = () => {
        this.setState({ showTour: false });
    };

    /* Handling of API calls for current Site Stats */

    componentDidMount() {
        try {
            axios.get(`https://donateable.ca/sitestats`)
            .then(res => {
                const totalHashes = res.data;
                this.setState({ totalHashes });
            });
            console.log(`GET request suceeeded`);
        } catch (error) {
            console.log(`GET request failed: ${error}`);
        }
    }

    /* Render Method for this Component */
    render() {
        return (
            /* Custom styling for buttons, sizing and colors 
            Button Opacity is 1 for creating non clickable stat buttons
            */
            <div className="text-center">
                <style className="text/css">
                    {`
                    .btn:disabled {
                        opacity: 1 !important; 
                    }
                    
                    .btn-turq {
                      background-color: #45A6D7;
                      border-color: #979797;
                      border-radius: 0;
                      color: white;
                      vertical-align: middle;
                      font-weight: 500;
                      letter-spacing: 0.05em;
                      font-family: 'Montserrat-Bold', sans-serif;
                      margin-bottom: 6px;
                      max-width: 305px;
                      width: 90%;
                      height: 48px;
                      font-size: 10pt;
                    }
          
                    .btn-turqdark{
                      background-color: #26607D;
                      border-color: #979797;
                      border-radius: 0;
                      color: white;
                      vertical-align: middle;
                      font-weight: 500;
                      letter-spacing: 0.05em;
                      font-family: 'Montserrat-Bold', sans-serif;
                      margin-bottom: 5px;
                      max-width: 305px;
                      width: 90%;
                      height: 48px;
                      font-size: 10pt;
                    }
          
                    .btn-turqwhite{
                      background-color: #FFFFFF;
                      border-color: #979797;
                      border-radius: 0;
                      color: #26607D;
                      font-weight: 500;
                      letter-spacing: 0.05em;
                      font-family: 'Montserrat-Bold', sans-serif;
                      margin-bottom: 5px;
                      max-width: 305px;
                      width: 90%;
                      height: 48px;
                      font-size: 10pt;
                    }
            `}
                </style>
                <NavLink to="/charities" style={{ textDecoration: "none" }}>
                    <Button variant="turqdark" className="row" size="lg">
                        SELECT YOUR CHARITY
                    </Button>
                </NavLink>
                <Button
                    variant="turqwhite"
                    size="lg"
                    onClick={this.handleShowHIW}
                >
                    HOW IT WORKS
                </Button>
                <Button
                    variant="turqwhite"
                    size="lg"
                    onClick={this.handleShowTour}
                >
                    TAKE A TOUR
                </Button>
                <Button disabled variant="turq" size="lg">
                    CURRENTLY DONATING
                </Button>
                <NavLink to="/wvs" style={{ textDecoration: "none" }}>
                    <Button variant="turq" size="lg">
                        DONATORS TO DATE
                    </Button>
                </NavLink>
                <NavLink to="/account" style={{ textDecoration: "none" }}>
                    <Button variant="turq" size="lg">
                        TOTAL HASHES {this.state.totalHashes}
                    </Button>
                </NavLink>

                <HowItWorksModal
                    show={this.state.showHIW}
                    hide={this.handleHideHIW}
                />
                <TourModal
                    show={this.state.showTour}
                    hide={this.handleHideTour}
                />
            </div>
        );
    }
}

export default Buttons;
