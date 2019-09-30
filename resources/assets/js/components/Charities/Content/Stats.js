import React, { Component } from "react";
import ProgressBar from "./ProgressBar";
import LineBreak from "./LineBreak";

class Stats extends Component {
    render() {
        return (
            <div>
                <img
                    src="/img/charity/Victim-Services.png"
                    style={{ width: "50%", margin: "auto" }}
                />
                <h2> VICTIM SERVICES WELLINGTON </h2>
                <h2 style={{ fontWeight: "400", fontSize: "16px" }}>
                    {" "}
                    STATISTICS{" "}
                </h2>

                <ProgressBar
                    label="2"
                    percentage={22}
                    title="CURRENTLY DONATING"
                />
                <ProgressBar
                    label="34"
                    percentage={56}
                    title="DONATORS TO DATE"
                />
                <ProgressBar
                    label="62M"
                    percentage={70}
                    title="TOTAL HASHES"
                    details="62 406 532"
                />

                <LineBreak />

                <img
                    src="/img/logo/D-Coloured-250x250.png"
                    style={{ width: "25%", margin: "auto" }}
                />
                <h2> DONATEABLE </h2>
                <h2 style={{ fontWeight: "400", fontSize: "16px" }}>
                    {" "}
                    STATISTICS{" "}
                </h2>

                <ProgressBar
                    label="15"
                    percentage={34}
                    title="CURRENTLY DONATING"
                />
                <ProgressBar
                    label="66"
                    percentage={363}
                    title="DONATORS TO DATE"
                />
                <ProgressBar
                    label="3B"
                    percentage={82}
                    title="TOTAL HASHES"
                    details="3 916 406 532"
                />
            </div>
        );
    }
}

export default Stats;
