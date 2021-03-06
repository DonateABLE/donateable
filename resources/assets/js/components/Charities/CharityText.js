import React from "react";

// The Following returns some basic text as a SFC to the Charity Page

const CharityText = props => {
    return (
        <div>
            <h1
                style={{
                    marginBottom: "0",
                    marginTop: "5%",
                    fontSize: 20,
                    color: "#45A6D7",
                    fontFamily: "Montserrat-Bold"
                }}
            >
                {props.text1}
            </h1>
            <h2
                style={{
                    fontSize: 20,
                    color: "#26607D",
                    fontFamily: "Montserrat-Bold",
                    marginBottom: "5%",
                    paddingBottom: "10px"
                }}
            >
                {props.text2}
            </h2>
        </div>
    );
};

export default CharityText;
