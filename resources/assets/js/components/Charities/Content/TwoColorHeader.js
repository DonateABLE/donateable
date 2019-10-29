import React, { Component } from "react";

class TwoColorHeader extends Component {
    render() {
        return (
            <div
                style={{
                    marginTop: "20px",
                    marginBottom: "20px",
                    clear: "both",
                    textAlign: "center"
                }}
            >
                <h2
                    style={{
                        display: "inline",
                        fontFamily: "Montserrat, Barlow, sans-serif",
                        fontWeight: "700",
                        fontSize: "18px",
                        color: "#26607D"
                    }}
                >
                    {this.props.darkText}&nbsp;
                </h2>
                <h2
                    style={{
                        display: "inline",
                        fontFamily: "Montserrat, Barlow, sans-serif",
                        fontWeight: "700",
                        fontWeight: "700",
                        fontSize: "18px",
                        color: "#45A6D7"
                    }}
                >
                    {this.props.lightText}
                </h2>
            </div>
        );
    }
}

export default TwoColorHeader;
