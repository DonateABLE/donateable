import React from "react";

// The Following returns some basic text as a SFC to Main

const Text = props => {
    return (
        <div id="header-text">
            <h1
                style={{
                    marginBottom: 0,
                    marginTop: 20,
                    fontSize: 17,
                    fontFamily: "Montserrat-Bold"
                }}
            >
                {props.text1}
            </h1>
            <h2
                style={{
                    fontSize: 17,
                    marginTop: 0,
                    marginBottom: 20,
                    fontFamily: "Montserrat-Bold"
                }}
            >
                {props.text2}
            </h2>
        </div>
    );
};

export default Text;
