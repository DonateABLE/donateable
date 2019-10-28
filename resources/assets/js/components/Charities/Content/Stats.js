import React, { Component } from "react";
import ProgressBar from "./ProgressBar";
import LineBreak from "./LineBreak";

class Stats extends Component {
    render() {
        return (
            <div>
                <h2
                    style={{
                        fontFamily: "Montserrat, Barlow, sans-serif",
                        marginTop: "20px",
                        marginBottom: "20px"
                    }}
                >
                    {" "}
                    VSW STATISTICS{" "}
                </h2>
                <ProgressBar
                    label="2"
                    percentage={22}
                    title="CURRENTLY DONATING"
                    details="15"
                />
                <ProgressBar
                    label="34"
                    percentage={56}
                    title="DONATORS TO DATE"
                    details="150"
                />
                <ProgressBar
                    label="62M"
                    percentage={70}
                    title="TOTAL HASHES"
                    details="62 406 532"
                />
                <ProgressBar
                    label="1"
                    percentage={80}
                    title="Rank"
                    details="62 406 532"
                />
            </div>
        );
    }
}

export default Stats;
