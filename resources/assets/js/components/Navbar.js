import React, { Component } from "react";
import { Navbar, Nav, Form, NavDropdown } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import ButtonGrouping from "./Navigation/ButtonGrouping";
import LoginButtons from "./Navigation/LoginButtons";

/* Before this was function Navigation must be a class 
   Needs to extend the Component class/type from the react framework 
   This is the Navigation Bar that will be renderend at the top of each page */

class Navigation extends Component {
    /* Can but does not always need a constructor */
    constructor(props, context) {
        super(props, context);

        this.state = {
            show: false
        };
    }

    /* I moved the functions from the constructor to the class
   (still accessible by this.myFunc) */

    handleShow = () => {
        this.setState({ show: true });
    };

    handleHide = () => {
        this.setState({ show: false });
    };

    /* If a class is used the render function must be invoked (I
     believe this turns JSX -> html) you must return from the 
     render method (again jsx-> html -> stored in a virtual 
      dom node by react) */

    render() {
        return (
            <div id="navbar">
                <style>
                    {`     
                .bg-light {
                  background-color: #FFFFFF !important;
                }

                button.navbar-toggler {
                  border-color: white !important;
                }

                button.navbar-toggler.collapsed {
                  border-color: white;
                }

                .navbar-toggler {
                  border-color: white !important;
                  outline: none !important;
                }

                .navbar-toggler-icon {
                  background-image: url('img/burger.png') !important;
                }

                .navbar-brand {
                    margin-left: 6rem;
                    padding-left: 0;
                }
              `}
                </style>
                <Navbar
                    collapseOnSelect
                    expand="xl"
                    style={{ backgroundColor: "#45A6d7" }}
                    bg="light"
                    variant="light"
                >
                    <Navbar.Brand>
                        <img
                            src="/img/donateABLE-long-colour-250.png"
                            width="100%"
                            height="100%"
                            style={{ justifyContent: "center" }}
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav
                            className="text-center"
                            style={{ paddingRight: 0 }}
                        >
                            <ButtonGrouping />
                        </Nav>
                        <Nav
                            className="text-center"
                            style={{ paddingRight: 0 }}
                        >
                            <LoginButtons />
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Navigation;
