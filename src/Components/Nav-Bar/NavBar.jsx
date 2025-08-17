import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "./Navbar.css";

export default function NavBar() {
  return (
    <Navbar expand="lg" bg="light" variant="light" className="shadow-sm">
      <Container>
        <Navbar.Brand as={NavLink} to="/home">
          Al Shaheen
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">

            <NavLink 
              to="/home" 
              className={({ isActive }) => 
                isActive ? "nav-link active nav-custom" : "nav-link nav-custom"
              }
            >
              Home
            </NavLink>

            <NavLink 
              to="/services" 
              className={({ isActive }) => 
                isActive ? "nav-link active nav-custom" : "nav-link nav-custom"
              }
            >
              Services
            </NavLink>

            <NavLink 
              to="/categories" 
              className={({ isActive }) => 
                isActive ? "nav-link active nav-custom" : "nav-link nav-custom"
              }
            >
              Categories
            </NavLink>

            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                isActive ? "nav-link active nav-custom" : "nav-link nav-custom"
              }
            >
              About
            </NavLink>

            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                isActive ? "nav-link active nav-custom" : "nav-link nav-custom"
              }
            >
              Contact
            </NavLink>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
