import React, { Component } from "react";
import { Dropdown, Accordion, Card, Button } from "react-bootstrap";
import DropdownBody from "./DropdownBody";

let paragraph1 =
    "Absolutely not. One of the goals of donateABLE is to make donating simple and convenient for all users. By eliminating the need for software to be installed we have enabled users to be able to donate from any of their devices at anytime, anywhere. donateABLE uses scripting language inside your web browser of choice to perform all of the complex hashing algorithms. Simply closing the browser, or the tab associated with the donating, will stop the process entirely, and nothing will be left behind on your system.";
let paragraph2 =
    "The overall mission and purpose of donateABLE is to give back to the local community. The project in it`s entirety was funded solely by Synergenics, for all of the development and implementation of this new technology. Going forward, 85% of all donated CPU power will go directly to your charity of choice. The remaining 15% will be kept back to help fund infrastructure and management costs related to running this endeavour.";
let paragraph3 =
    "The current digital currency being mined by this project is an open source Cryptocurrency, founded in April 2014, called MONERO (XMR). This specific currency is being used due to the fact that it uses the CryptoNight hash algorithms, which are geared to work best with CPU’s and are deliberately made to be resilient towards ASIC mining to keep the currency safer and available to the masses.";
let paragraph4 =
    "There could be a few different factors preventing you from being able to donate. Certain browsers, pop up blockers and anti virus packages have the potential of stop the mining process from being invoked. If you are not prompted with a pop up after pressing the START button on your selected charity to begin donating, you may need to add an exception for the donateABLE website in any of those three solutions. If adding the exception does not resolve the issue, feel free to contact our support staff from the Technical Support form on the Contact Us Page.";
let paragraph5 =
    "A cheque for all the proceeds will be given directly to the charities on a yearly basis. Synergenics will handle the process of converting the digital assets raised for the charities, and turning them into FIAT currency.";
let paragraph6 =
    "Average computer tasks such as web browsing, word processing, and YouTube use less than 30% CPU in total. The rest of it is unused and can be put towards donations. Feel free to experiment with the amount of CPU you use to donate with, and to turn it up when you are leaving your computer for a while.";

let titleText1 =
    "Is there any software installed on my system to be able to donate?";
let titleText2 = "What percentage raised goes to charity?          ";
let titleText3 = "What currency is being mined?                    ";
let titleText4 = "Why is my browser not letting me donate?         ";
let titleText5 = "How does the charity receive the donated money?  ";
let titleText6 = "How much processing power should I donate?       ";
class FAQ extends Component {
    render() {
        return (
            <div>
                <style>
                    {`
            .btn {
              font-weight: 600;
              font-size: 0.75rem;
              padding-left: 10px;
              padding-right: 10px;
              text-transform: none;
              width: 100%;
              white-space: normal;
              text-align: left;
            }
          `}
                </style>
                {/* <DropdownBody title={titleText1} bodyText={paragraph1} />
                <DropdownBody title={titleText2} bodyText={paragraph2} />
                <DropdownBody title={titleText3} bodyText={paragraph3} />
                <DropdownBody title={titleText4} bodyText={paragraph4} />
                <DropdownBody title={titleText5} bodyText={paragraph5} />
                <DropdownBody title={titleText6} bodyText={paragraph6} /> */}

                <div className="accordion container" id="accordionExample">
                    <div className="card">
                        <div className="card-header" id="headingOne">
                            <h5 className="mb-0">
                                Is there any software installed on my system to
                                be able to donate?
                            </h5>
                            <div className="icon">
                                <button
                                    className="btn btn-link"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#collapseOne"
                                    aria-expanded="true"
                                    aria-controls="collapseOne"
                                    aria-label="Chevron Down"
                                >
                                    <i className="fas fa-angle-down fa-3x"></i>
                                </button>
                            </div>
                        </div>

                        <div
                            id="collapseOne"
                            className="collapse show"
                            aria-labelledby="headingOne"
                            data-parent="#accordionExample"
                        >
                            <div className="card-body">
                                Absolutely not. One of the goals of donateABLE
                                is to make donating simple and convenient for
                                all users. By eliminating the need for software
                                to be installed we have enabled users to be able
                                to donate from any of their devices at anytime,
                                anywhere. donateABLE uses scripting language
                                inside your web browser of choice to perform all
                                of the complex hashing algorithms. Simply
                                closing the browser, or the tab associated with
                                the donating, will stop the process entirely,
                                and nothing will be left behind on your system.
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingTwo">
                            <h5 className="mb-0">
                                What percentage raised goes to the charity?
                            </h5>
                            <div className="icon">
                                <button
                                    className="btn btn-link"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#collapseTwo"
                                    aria-expanded="true"
                                    aria-controls="collapseOne"
                                    aria-label="Chevron Down"
                                >
                                    <i className="fas fa-angle-down fa-3x"></i>
                                </button>
                            </div>
                        </div>
                        <div
                            id="collapseTwo"
                            className="collapse"
                            aria-labelledby="headingTwo"
                            data-parent="#accordionExample"
                        >
                            <div className="card-body">
                                The overall mission and purpose of donateABLE is
                                to give back to the local community. The project
                                in it's entirety was funded solely by
                                Synergenics, for all of the development and
                                implementation of this new technology. Going
                                forward, 85% of all donated CPU power will go
                                directly to your charity of choice. The
                                remaining 15% will be kept back to help fund
                                infrastructure and management costs related to
                                running this endeavour.
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingThree">
                            <h5 className="mb-0">
                                What currency is being mined?
                            </h5>
                            <div className="icon">
                                <button
                                    className="btn btn-link"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#collapseThree"
                                    aria-expanded="true"
                                    aria-controls="collapseOne"
                                    aria-label="Chevron Down"
                                >
                                    <i className="fas fa-angle-down fa-3x"></i>
                                </button>
                            </div>
                        </div>
                        <div
                            id="collapseThree"
                            className="collapse"
                            aria-labelledby="headingThree"
                            data-parent="#accordionExample"
                        >
                            <div className="card-body">
                                The current digital currency being mined by this
                                project is an open source Cryptocurrency,
                                founded in April 2014, called MONERO (XMR). This
                                specific currency is being used due to the fact
                                that it uses the CryptoNight hash algorithms,
                                which are geared to work best with CPU’s and are
                                deliberately made to be resilient towards ASIC
                                mining to keep the currency safer and available
                                to the masses.
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingFour">
                            <h5 className="mb-0">
                                Why is my browser not letting me donate?
                            </h5>
                            <div className="icon">
                                <button
                                    className="btn btn-link"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#collapseFour"
                                    aria-expanded="true"
                                    aria-controls="collapseOne"
                                    aria-label="Chevron Down"
                                >
                                    <i className="fas fa-angle-down fa-3x"></i>
                                </button>
                            </div>
                        </div>
                        <div
                            id="collapseFour"
                            className="collapse"
                            aria-labelledby="headingFour"
                            data-parent="#accordionExample"
                        >
                            <div className="card-body">
                                There could be a few different factors
                                preventing you from being able to donate.
                                Certain browsers, pop up blockers and anti virus
                                packages have the potential of stop the mining
                                process from being invoked. If you are not
                                prompted with a pop up after pressing the START
                                button on your selected charity to begin
                                donating, you may need to add an exception for
                                the donateABLE website in any of those three
                                solutions. If adding the exception does not
                                resolve the issue, feel free to contact our
                                support staff from the Technical Support form on
                                the Contact Us Page.
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingFive">
                            <h5 className="mb-0">
                                How does the charity receive the donated money?
                            </h5>
                            <div className="icon">
                                <button
                                    className="btn btn-link"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#collapseFive"
                                    aria-expanded="true"
                                    aria-controls="collapseOne"
                                    aria-label="Chevron Down"
                                >
                                    <i className="fas fa-angle-down fa-3x"></i>
                                </button>
                            </div>
                        </div>
                        <div
                            id="collapseFive"
                            className="collapse"
                            aria-labelledby="headingFive"
                            data-parent="#accordionExample"
                        >
                            <div className="card-body">
                                A cheque for all the proceeds will be given
                                directly to the charities on a yearly basis.
                                Synergenics will handle the process of
                                converting the digital assets raised for the
                                charities, and turning them into FIAT currency.
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingSix">
                            <h5 className="mb-0">
                                How much processing power should I donate?
                            </h5>
                            <div className="icon">
                                <button
                                    className="btn btn-link"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#collapseSix"
                                    aria-expanded="true"
                                    aria-controls="collapseOne"
                                    aria-label="Chevron Down"
                                >
                                    <i className="fas fa-angle-down fa-3x"></i>
                                </button>
                            </div>
                        </div>
                        <div
                            id="collapseSix"
                            className="collapse"
                            aria-labelledby="headingFive"
                            data-parent="#accordionExample"
                        >
                            <div className="card-body">
                                Average computer tasks such as web browsing,
                                word processing, and YouTube use less than 30%
                                CPU in total. The rest of it is unused and can
                                be put towards donations. Feel free to
                                experiment with the amount of CPU you use to
                                donate with, and to turn it up when you are
                                leaving your computer for a while.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FAQ;
