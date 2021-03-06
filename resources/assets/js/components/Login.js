import React, { Component } from "react";
import { Container } from "react-bootstrap";
import LoginForm from "./Login/LoginForm";
import SignupForm from "./Login/SignupForm";
import Navigation from "./Navbar";

class Login extends Component {
    componentDidMount() {
        window.scrollTo(0, 0); // Scroll to the top when routing
    }

    render() {
        return (
            <div
                id="login"
                className="text-center"
                style={{
                    minHeight: "100vh",
                    maxHeight: "100%",
                    overflow: "auto"
                }}
            >
                <style>
                    {`
                        .form {
                            margin: auto;
                            width: 80%;
                        }

                        .form-group{
                            margin: auto;
                            margin-bottom: 5%;
                            width: 100%;
                        }

                        .h1 {
                            margin: auto; 
                            margin-bottom: 4%;
                            width: 70%;
                            font-size: 20;
                            font-family: Montserrat-Bold, sans-serif;
                        }
                    `}
                </style>
                <Navigation />
                <p
                    style={{
                        color: "#26607D",
                        fontWeight: "500",
                        width: "80%",
                        margin: "auto",
                        paddingTop: "3%"
                    }}
                >
                    Simply lend your computer’s power to generate real value for
                    the charity of your choice. Donate to your favourite
                    charities without opening your wallet. It is that easy!
                </p>

                {/* Divider line between the Components */}
                <hr
                    width={"69%"}
                    style={{
                        display: "block",
                        height: "1px",
                        border: 0,
                        borderTop: "1px solid #26607D",
                        marginTop: "4%",
                        padding: 0
                    }}
                />

                <h1
                    style={{
                        margin: "auto",
                        marginBottom: "4%",
                        width: "70%",
                        fontSize: "20"
                    }}
                >
                    LOGIN
                </h1>

                <LoginForm variant="turqdark" />

                <hr
                    width={"69%"}
                    style={{
                        display: "block",
                        height: "1px",
                        border: 0,
                        borderTop: "1px solid #26607D",
                        marginTop: "4%",
                        padding: 0
                    }}
                />

                <h1
                    style={{
                        margin: "auto",
                        marginBottom: "4%",
                        width: "70%",
                        fontSize: "20"
                    }}
                >
                    SIGN UP
                </h1>
                <SignupForm variant="turqdark" />
            </div>
        );
    }
}

export default Login;
