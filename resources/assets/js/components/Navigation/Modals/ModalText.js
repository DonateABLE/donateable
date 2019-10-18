import React from "react";

// The Following returns some basic text as a SFC to Main

const ModalText = props => {
    return (
        <div>
            <h1
                style={{
                    marginBottom: 0,
                    marginTop: 10,
                    fontFamily: "Montserrat-Bold",
                    fontSize: props.fontSize1,
                    color: "white"
                }}
            >
                {props.text1}
            </h1>
            <h2
                style={{
                    fontFamily: "Montserrat-Bold",
                    fontSize: props.fontSize2
                }}
            >
                {props.text2}
            </h2>
        </div>
    );
};

export default ModalText;
