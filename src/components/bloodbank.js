import { Component } from 'react';
import "../bloodbank.css";
import Navbar from 'react-bootstrap/esm/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import Image from '../imges/profile.png';
import facebook from '../imges/facebook.png';
import tweeter from '../imges/tweeter.png';
import ins from '../imges/ins.png';
import think from '../imges/think.png';
import blood from '../imges/blood.gif';
import doctor from '../imges/doctor.jpg';
import donation from '../imges/donation.jpg';
class BloodBank extends Component {
  render() {
    return (
      <div class="helo">
        <Navbar className="navbar navbarr" collapseOnSelect expand="lg" variant="dark">
          <Navbar.Brand className="Brandd" href="/BloodBank">Blood Bank</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">

              <NavLink className="Link Linkk" activeClassName="selected" exact to="/home">Home</NavLink>
              <NavLink className="Link Linkk" activeClassName="selected" to="/DonorReg">Register as donor</NavLink>
              <NavLink className="Link Linkk" activeClassName="selected" to="/NeederReg">Register as Patient</NavLink>
              <NavLink className="Link Linkk" activeClassName="selected" to="/DonorList">Donors list</NavLink>
              <NavLink className="Link Linkk" activeClassName="selected" exact to="/NeederList">Patients list</NavLink>

            </Nav>
            <Nav>

              <NavDropdown title="notification" id="notification">
                <NavDropdown.Item href="#action/3.1">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <div className="div1" style={{ width: "100%", backgroundColor: "#F3F3F3" }}>
          <h4 className="text1" style={{ marginLeft: "150px", marginTop: "10px" }}> What do you know<br />about blood donation? <img src={think} className="image1" alt="think" style={{ height: "80px", width: "80px" }} /> </h4>
        </div>
        <div className="div2 mt-5" style={{ width: "100%", backgroundColor: "#F3F3F3" }}>
          <img src={blood} alt="blood type" style={{ marginLeft: "150px" }} />
          <h4 style={{ fontSize: "30px",  float: "right", marginRight: "200px", marginTop: "90px", textAlign: "center", fontWeight: "bold", fontFamily: "Quattrocento Sans" }}> In this Gif  <span style={{ fontSize: "22px" }}><p><br />You can see people who you can help <br /> with your blood type and
            the blood<br /> type you maybe need</p></span> </h4>

        </div>
        <div>
          <h4 style={{ fontWeight: "bolder", fontFamily: "Quattrocento Sans", marginLeft: "70px", textAlign: "center", marginTop: "80px", float: "left" }}>About Blood transfusion<br /> <span style={{ fontSize: "20px", fontWeight: "bold" }}> A blood transfusion is a routine medical procedure<br />
            in which donated blood is offered through a narrow <br />
            tube into a vein in your arm.This life-saving procedure
            <br />  can help replace blood lost due to surgery or injury.<br />
            A blood transfusion can also help if you have a disease<br />
            that prevents your body from making blood<br />
            or some of its components properly.</span></h4>
          <img src={doctor} alt="doctor" style={{ height: "300px", width: "300px", marginRight: "150px", marginTop: "50px", float: "right" }} />
        </div>
        <div>
          <img src={donation} alt="doctor" style={{ height: "300px", width: "300px", marginLeft: "100px", marginTop: "50px", float: "left" }} />
          <h4 style={{ fontWeight: "bolder", fontFamily: "Quattrocento Sans", marginLeft: "150px", textAlign: "center", marginTop: "140px", float: "right", marginRight: "120px" }}>benefits of blood donation<br /> <span style={{ fontSize: "20px", fontWeight: "bold" }}> Blood donation is very important to<br />
            Reduce harmful iron stores, Preserve<br />
            cardiovascular health,Reduce the risk
            <br /> cancer and Burn calories</span></h4>
        </div>

        <div className="footterr" style={{ bottom: "0", marginTop: "50%", paddingBottom: "0%", marginBottom: "0%", height: "150px" }}>
          <ul class="list-unstyled list-inline text-center">
            <p style={{ fontWeight: "bold", fontSize: "23px" }}>
              We are also in
            </p>

            <li class="list-inline-item">
              <a class="btn-floating btn-tw mx-1" style={{ fontWeight: "bold", fontSize: "26px", color: "black" }}>
                <img src={ins} style={{ width: "50px", height: "50px", marginRight: "10px" }} />
              </a>
            </li>

            <li class="list-inline-item">
              <a class="btn-floating btn-li mx-1" style={{ fontWeight: "bold", fontSize: "26px", color: "black" }}>
                <img src={facebook} style={{ width: "40px", height: "40px", marginRight: "10px" }} />
              </a>
            </li>
            <li class="list-inline-item">
              <a class="btn-floating btn-dribbble mx-1" style={{ fontWeight: "bold", fontSize: "26px", color: "black" }}>
                <img src={tweeter} style={{ width: "40px", height: "40px" }} />
              </a>
            </li>
            <p>Copyright © 2020 - 2021 <br /> All Rights Reserved to our graduation project team</p>
          </ul>
        </div>
      </div>
    );
  }
}
export default BloodBank;