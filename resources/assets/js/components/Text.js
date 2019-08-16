import React from "react";

// The Following returns some basic text as a SFC to Main

const Text = props => {
    return (
        <div>
            <h1 style={{ marginBottom: 0, marginTop: 20, fontSize: 19 }}>
                {props.text1}
            </h1>
            <h2 style={{ fontSize: 19, marginBottom: 20 }}>{props.text2}</h2>
        </div>
    );
};

export default Text;
