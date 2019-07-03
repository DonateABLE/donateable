import React, {Component} from 'react'
import {Navbar, Nav, Form, NavDropdown} from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/NavbarCollapse'
import ButtonGrouping from './Navigation/ButtonGrouping'
import LoginButtons from './Navigation/NavButtons'




//before this was function Navigation must be a class
// needs to extend the Component class/type from the react framework

// This is the Navigation Bar that will be renderend at the top of each page

class Navigation extends Component {
  //can but does not always need a constructor
  constructor(props, context) {
      super(props, context);

      this.state = {
          show: false
      }

  }
  //I moved the functions from the constructor to the class (still accessible by this.myFunc)
  handleShow = () => {
      this.setState({show: true});
  };

  handleHide = () => {
      this.setState({show: false});
  };


  // if a class is used the render function must be invoked (I believe this turns JSX -> html)
  // you must return from the render method (again jsx-> html -> stored in a virtual dom node by react)
  render() {
      return (
          <div>
              <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                  <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                  <Navbar.Collapse id="responsive-navbar-nav">
                      <Nav className="mr-auto">
                          <ButtonGrouping />
                          {/*}<Nav.Link href="#Home">Home</Nav.Link>
                          <Nav.Link href="#About">About </Nav.Link>
                          <Nav.Link href="#modalHowItWorks">How It Works</Nav.Link>
                          <NavDropdown title="Charities" id="collasible-nav-dropdown">
                              <NavDropdown.Item href="#charity/1">Guelph Humane Society</NavDropdown.Item>
                              <NavDropdown.Item href="#charity/2">Victim Services Wellington</NavDropdown.Item>
                              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                              <NavDropdown.Divider />
                          </NavDropdown> */}
                      </Nav>
                      <Nav>
                          {/*<Nav.Link href="#Privacy">Privacy Policy</Nav.Link>
                          <Nav.Link eventKey={2} href="#Contact">Contact</Nav.Link>
                            <Nav.Link href="#FAQ">FAQ</Nav.Link>*/}
                          <LoginButtons />
                      </Nav>
                  </Navbar.Collapse>
              </Navbar>
          </div>
      );
  }

}

export default Navigation
