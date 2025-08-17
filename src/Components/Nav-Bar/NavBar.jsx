import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container>
        {/* Logo */}
        <Navbar.Brand as={NavLink} to="/home">
          <img
            src="/assets/img/logo.jpg" // <-- update to your logo path
            alt="Al Shaheen Logo"
            style={{ height: "50px" }}
          />
        </Navbar.Brand>

        {/* Toggle for mobile */}
        <Navbar.Toggle aria-controls="main-navbar" />

        {/* Nav Links */}
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">

            {/* Dropdown */}
            <NavDropdown
              title="Services"
              id="services-dropdown"
              className="nav-dropdown-custom"
            >
              <NavDropdown.Item as={NavLink} to="/services/aluminium-window">
                Aluminium Window
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/services/doors-works">
                Doors Works
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/services/frameless-glass-doors">
                Frameless Glass Doors
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/services/partition-works">
                Partition Works
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/services/curtain-wall">
                Curtain Wall
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/services/aluminium-works">
                Aluminium Works
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/services/shower-enclosure">
                Aluminium Shower Enclosure Works
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/services/wood-pergolas">
                Aluminium Wood Pergolas
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/services/panel-cladding">
                Aluminum Composite Panel Cladding
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/services/stainless-steel">
                Stainless Steel
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/services/electroplating-steel-work">
                Electroplating Stainless Steel Work
              </NavDropdown.Item>
            </NavDropdown>

            {/* Normal Nav Links */}
            
            <Nav.Link as={NavLink} to="/about" className="nav-custom">
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className="nav-custom">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
