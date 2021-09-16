import { Component } from 'react';
import "../landpage.css";
import facebook from '../imges/facebook.png';
import tweeter from '../imges/tweeter.png';
import ins from '../imges/ins.png';
import donate from '../imges/donate.png';
import newspaper from '../imges/newspaper.png';
import rej from '../imges/rej.png';
import login from '../imges/login.png';
import care from '../imges/care.png';
import it from '../imges/it.png';
import contact from '../imges/contact.png';
import { NavLink } from 'react-router-dom';

class LandPage extends Component {
  render() {
    return (
      <div className="start" style={{ backgroundColor: "white", width:"100%" }} >
        <div className="bg-img">
          <div className="have">
            <div className="topnav">
              <a href="#home" >Home</a>
              <a href="#aboutAs" >About us</a>
              <a href="#contact" >Contact us</a>
              <a href="./login">Sign in</a>
            </div>
          </div>
          <h1 style={{ marginLeft: "200px", fontSize: "80px", paddingTop: "120px", fontWeight: "bolder", fontFamily: "Arial Rounded MT" }}>Elinic</h1>
          <p style={{ fontSize: "20px", marginLeft: "200px", fontWeight: "bolder", color: "#3880B2", fontFamily: "Arial Rounded MT" }}>We are here to help you</p>
          <NavLink to="./home">
            <button className="getStarted" >Get started</button>
          </NavLink>
        </div >
        <p id="home" style={{ marginLeft: "100px", fontSize: "30px", fontWeight: "bold", marginTop: "20px" }}>Our cooperation<br />step by step</p>
        <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3" style={{ backgroundColor: "white", marginLeft: "10px", color: "#B90E0E", fontWeight: "bold", border: "hidden" }}>
          <div className="col" >
            <div className="p-3 border bg-light"  >
              <img src={rej} alt="rej" />
            </div>
          </div>
          <div class="col" >
            <div class="p-3 border bg-light" >
              <img src={login} alt="login" style={{ height: "100px" }} />
            </div>
          </div>
          <div class="col">
            <div class="p-3 border bg-light">
              <img src={newspaper} alt="newspaper" />
            </div>
          </div>
          <div class="col">
            <div class="p-3 border bg-light">
              <img src={donate} alt="donate" />
            </div>
          </div>
          <div class="col">
            <div class="p-3 border bg-light">
              <img src={care} alt="care" style={{ height: "100px" }} />
            </div>
          </div>
          <div class="col">
            <div class="p-3 border bg-light"><p>Sign up to can
              join us in
              our journey</p></div>
          </div>
          <div class="col">
            <div class="p-3 border bg-light"><p>Sign in to see
              the sure and new
              news about corona </p></div>
          </div>
          <div class="col">
            <div class="p-3 border bg-light"><p>In our wall you
              will be in save
              from Rumours</p></div>
          </div>
          <div class="col">
            <div class="p-3 border bg-light"><p>in Blood Bank
              we help you to find
              people who need
              or donor blood</p></div>
          </div>
          <div class="col">
            <div class="p-3 border bg-light"><p>you can check up
              your health
              and communicate with
              doctors from home</p></div>
          </div>
        </div>
        <div style={{ width: "100vw" }} id="aboutAs">
          <img src={it} alt="it" style={{ height: "300px", width: "300px", marginLeft: "100px" }} />
          <p style={{ float: "right", marginRight: "200px", marginTop: "30px", fontSize: "40px", fontFamily: "Segoe UI", color: "#4A8BB8", fontWeight: "bold" }}>About US<span style={{ fontSize: "18px", color: "#010101" }}><br /><p> we are team from faculty of computer and artificial intelligence
            <br />
            IT department, Cairo university. It's our graduation project<br />
            and we decide to make it help people to take care their health<br />
            from home and to help people who need blood and  <br />
            who want to donor blood to find each other easily.</p></span></p>
        </div>
        <div style={{ backgroundColor: "#F3F3F3", marginTop: "50px" }} id="contact">
          <img src={contact} alt="contact" style={{ height: "50px", width: "50px", marginBottom: "15px", marginLeft: "20px" }} />
          <p style={{ fontSize: "40px", display: "inline", fontWeight: "bold", marginLeft: "20px" }}>Contact us</p>

          <div>
            <img src={facebook} alt="facebook" style={{ height: "50px", width: "50px", marginLeft: "400px" }} />
            <p style={{ display: "inline", marginLeft: "20px", fontSize: "30px", fontWeight: "bold" }}>www.Elinic.com</p>
          </div>
          <div>
            <img src={tweeter} alt="tweeter" style={{ height: "50px", width: "50px", marginLeft: "500px" }} />
            <p style={{ display: "inline", marginLeft: "20px", fontSize: "30px", fontWeight: "bold" }}>www.Elinic.com</p>
          </div>
          <div>
            <img src={ins} alt="ins" style={{ height: "50px", width: "50px", marginLeft: "600px" }} />
            <p style={{ display: "inline", marginLeft: "20px", fontSize: "30px", fontWeight: "bold" }}>www.Elinic.com</p>
          </div>
        </div>
        <div style={{ height: "70px", backgroundColor: "#A1BACB", marginTop: "30px" }}>
          <p style={{ fontSize: "20px", textAlign: "center" }}>Copyright © 2020 - 2021 <br /> All Rights Reserved to our graduation project team</p>
        </div>
      </div>
    );
  }
}
export default LandPage;