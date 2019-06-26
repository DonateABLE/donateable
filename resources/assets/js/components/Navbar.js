import React from 'react'
import {Navbar, Nav, Form, NavDropdown} from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';

function Navigation () {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#About">About </Nav.Link>
            <Nav.Link href="#modalHowItWorks">How It Works</Nav.Link>
            <NavDropdown title="Charities" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#charity/1">Guelph Humane Society</NavDropdown.Item>
              <NavDropdown.Item href="#charity/2">Victim Services Wellington</NavDropdown.Item>
              {/*}<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />*/}
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#Privacy">Privacy Policy</Nav.Link>
            <Nav.Link eventKey={2} href="#Contact">Contact</Nav.Link>
            <Nav.Link href="#FAQ">FAQ</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Navigation
