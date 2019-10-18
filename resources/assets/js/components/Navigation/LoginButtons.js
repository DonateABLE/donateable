import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

/* This the component for the Buttons that will be renedered in the Nav bar */

class LoginButtons extends Component {
    render() {
        return (
            <div id="login-buttons">
                <style className="text/css">
                    {`
                        .btn-turqdark {
                            background-color: #26607D;
                            border-color: #979797;
                            border-radius: 0;
                            color: white;
                            vertical-align: middle;
                            letter-spacing: 0.05em;
                            font-family: 'Montserrat-Medium', sans-serif;
                            margin-bottom: 5px;
                            max-width: 305px;
                            width: 90%;
                            height: 48px;
                            font-size: 10pt;
                        }
                        
                        .btn-signup {
                            background-color: #26607D;
                            border-color: #979797;
                            border-radius: 0;
                            color: white;
                            vertical-align: middle;
                            letter-spacing: 0.05em;
                            font-family: 'Montserrat-Medium', sans-serif;
                            margin-bottom: 5px;
                            width: 305px;
                            height: 48px;
                            font-size: 10pt;
                        }
                
                        .btn-login{
                            background-color: #FFFFFF;
                            border-color: #979797;
                            border-radius: 0;
                            color: #26607D;
                            letter-spacing: 0.05em;
                            font-family: 'Montserrat-Medium', sans-serif;
                            margin-bottom: 5px;
                            margin-top: 20px;
                            width: 305px;
                            height: 48px;
                            font-size: 10pt;
                        }
                    `}
                </style>
                <Link to="/login">
                    <Button variant="login" size="lg">
                        LOG IN
                    </Button>
                </Link>
                <Link to="/login">
                    <Button variant="signup" size="lg">
                        SIGN UP
                    </Button>
                </Link>
            </div>
        );
    }
}

export default LoginButtons;
