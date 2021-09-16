import React from 'react';
import Navbar from 'react-bootstrap/esm/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import '../nav.css';
import Image from '../imges/doctor.png'

function Navv() {
  return (
    <Navbar sticky="top" className="navv" expand="lg">
      <Navbar.Brand className="logo" style={{ color: "#7B7777", fontSize: "27px", fontFamily: "Arial, Helvetica, sans-serif" }} href="./home">elinic</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/BloodBank" className="bblood links" style={{
            fontWeight: "bold", color: "rgb(199, 50, 50)",
            fontSize: "20px"
          }}>Blood Bank</Nav.Link>
          <Nav.Link href="/survey" className="links" style={{
            fontWeight: "bold", color: "white",
            fontSize: "19px"
          }}>Check on yourself</Nav.Link>
        </Nav>
        <Form inline>
          <a href="/doctorprofile" className="links">
          <img src={Image} style={{ width: "50px", height: "50px" }} />
          </a>
          <NavDropdown id="basic-nav-dropdown"
            className="mr-5">
            <NavDropdown.Item href="/login"><i class="fa fa-sign-out" aria-hidden="true"></i> Logout</NavDropdown.Item>
            <NavDropdown.Item href="/settings"><i class="fa fa-cog"></i> Settings</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="notification" id="basic-nav-dropdown"
            className="m">
            <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2"></NavDropdown.Item>
          </NavDropdown>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navv;