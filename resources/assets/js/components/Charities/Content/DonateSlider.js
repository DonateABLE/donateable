import "rc-slider/assets/index.css";

import React, { Component } from "react";
import Slider from "rc-slider";

let cpu = 50; // The CPU percentage is defined here

// This component needs to be reworked to pull and send to coinimp the CPU
// percentage that the user will choose to donate

// Also still need to pull current value of slider into {currentValue}% CPU

class DonateSlider extends Component {
    render() {
        return (
            <div style={{ marginTop: "5%", marginBottom: "5%", width: "95%" }}>
                <Slider
                    defaultValue={cpu} // Default value on the slider
                    trackStyle={{ backgroundColor: "#45A6D7", height: 10 }}
                    handleStyle={{
                        borderColor: "#45A6D7",
                        height: 28,
                        width: 28,
                        fontFamily: "Montserrat, Barlow, sans-serif",
                        backgroundColor: "white",
                        alignContent: "center"
                    }}
                    railStyle={{ backgroundColor: "#26607D", height: "10" }}
                />
            </div>
        );
    }
}

export default DonateSlider;
