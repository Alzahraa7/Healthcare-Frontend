import { Component } from 'react';
import "../list.css"
import Navbar from 'react-bootstrap/esm/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from '../imges/profile.png'
import Image2 from '../imges/asset.png'
import facebook from  '../imges/facebook.png'
import tweeter from  '../imges/tweeter.png'
import ins from  '../imges/ins.png'
import {NavLink} from 'react-router-dom';
class NeederList extends Component{
    render()
    {
        return(
          <div className="container containeer">
          <Navbar className="navbar navbarr" collapseOnSelect expand="lg" variant="dark">
          <Navbar.Brand className = "Brandd" href="/BloodBank">Blood Bank</Navbar.Brand>
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

        <h3 className="hh33">Patient list</h3>
        <div className="card-group cardgroup">
          <div className="col">
            <div className="card cardd">
              <img src={Image2} class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Patient</h5>
                <p className="card-text cardtext">
                 <span style={{color: "#746D6E"}}> Name : </span> Doha Kaled
                  <br />
                  <span style={{color: "#746D6E"}}> Country : </span> Egypt
                  <br/>
                  <span style={{color: "#746D6E"}}> City : </span> Cairo
                  <br/>
                  <span style={{color: "#746D6E"}}> Blood type : </span> B+
                  <br/>
                  <span style={{color: "#746D6E"}}> Hospital : </span> Ibn Sina
                </p>
                <NavLink to="/chat">
               <button class="btn btn-outline-danger">Connect</button>
              </NavLink>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card cardd">
              <img src={Image2} class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Patient</h5>
                <p className="card-text cardtext"><span style={{color: "#746D6E"}}> Name : </span> Doha Kaled
                  <br />
                  <span style={{color: "#746D6E"}}> Country : </span> Egypt
                  <br/>
                  <span style={{color: "#746D6E"}}> City : </span> Cairo
                  <br/>
                  <span style={{color: "#746D6E"}}> Blood type : </span> B+
                  <br/>
                  <span style={{color: "#746D6E"}}> Hospital : </span> Ibn Sina
                  </p>
                  <NavLink to="/chat">
               <button class="btn btn-outline-danger">Connect</button>
              </NavLink>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card cardd">
              <img src={Image2} class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Patient</h5>
                <p className="card-text cardtext">
                 <span style={{color: "#746D6E"}}> Name : </span> Doha Kaled
                  <br />
                  <span style={{color: "#746D6E"}}> Country : </span> Egypt
                  <br/>
                  <span style={{color: "#746D6E"}}> City : </span> Cairo
                  <br/>
                  <span style={{color: "#746D6E"}}> Blood type : </span> B+
                  <br/>
                  <span style={{color: "#746D6E"}}> Hospital : </span> Ibn Sina
                </p>
                <NavLink to="/chat">
               <button class="btn btn-outline-danger">Connect</button>
              </NavLink>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card cardd">
              <img src={Image2} class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Patient</h5>
                <p className="card-text cardtext"><span style={{color: "#746D6E"}}> Name : </span> Doha Kaled
                  <br />
                  <span style={{color: "#746D6E"}}> Country : </span> Egypt
                  <br/>
                  <span style={{color: "#746D6E"}}> City : </span> Cairo
                  <br/>
                  <span style={{color: "#746D6E"}}> Blood type : </span> B+
                  <br/>
                  <span style={{color: "#746D6E"}}> Hospital : </span> Ibn Sina</p>
                  <NavLink to="/chat">
               <button class="btn btn-outline-danger">Connect</button>
              </NavLink>
              </div>
            </div>
          </div>
    
        </div>
        <div className="card-group cardgroup">
        <div className="col">
            <div className="card cardd">
              <img src={Image2} class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Patient</h5>
                <p className="card-text cardtext">
                 <span style={{color: "#746D6E"}}> Name : </span> Doha Kaled
                  <br />
                  <span style={{color: "#746D6E"}}> Country : </span> Egypt
                  <br/>
                  <span style={{color: "#746D6E"}}> City : </span> Cairo
                  <br/>
                  <span style={{color: "#746D6E"}}> Blood type : </span> B+
                  <br/>
                  <span style={{color: "#746D6E"}}> Hospital : </span> Ibn Sina
                </p>
                <NavLink to="/chat">
               <button class="btn btn-outline-danger">Connect</button>
              </NavLink>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card cardd">
              <img src={Image2} class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Patient</h5>
                <p className="card-text cardtext"><span style={{color: "#746D6E"}}> Name : </span> Doha Kaled
                  <br />
                  <span style={{color: "#746D6E"}}> Country : </span> Egypt
                  <br/>
                  <span style={{color: "#746D6E"}}> City : </span> Cairo
                  <br/>
                  <span style={{color: "#746D6E"}}> Blood type : </span> B+
                  <br/>
                  <span style={{color: "#746D6E"}}> Hospital : </span> Ibn Sina</p>
                  <NavLink to="/chat">
               <button class="btn btn-outline-danger">Connect</button>
              </NavLink>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card cardd">
              <img src={Image2} class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Patient</h5>
                <p className="card-text cardtext"><span style={{color: "#746D6E"}}> Name : </span> Doha Kaled
                  <br />
                  <span style={{color: "#746D6E"}}> Country : </span> Egypt
                  <br/>
                  <span style={{color: "#746D6E"}}> City : </span> Cairo
                  <br/>
                  <span style={{color: "#746D6E"}}> Blood type : </span> B+
                  <br/>
                  <span style={{color: "#746D6E"}}> Hospital : </span> Ibn Sina</p>
                  <NavLink to="/chat">
               <button class="btn btn-outline-danger">Connect</button>
              </NavLink>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card cardd">
              <img src={Image2} class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Patient</h5>
                <p className="card-text cardtext"><span style={{color: "#746D6E"}}> Name : </span> Doha Kaled
                  <br />
                  <span style={{color: "#746D6E"}}> Country : </span> Egypt
                  <br/>
                  <span style={{color: "#746D6E"}}> City : </span> Cairo
                  <br/>
                  <span style={{color: "#746D6E"}}> Blood type : </span> B+
                  <br/>
                  <span style={{color: "#746D6E"}}> Hospital : </span> Ibn Sina</p>
                  <NavLink to="/chat">
               <button class="btn btn-outline-danger">Connect</button>
              </NavLink>
              </div>
            </div>
          </div>
 
        </div> 
        <div className="card-group cardgroup">
        <div className="col">
            <div className="card cardd">
              <img src={Image2} class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Patient</h5>
                <p className="card-text cardtext">
                 <span style={{color: "#746D6E"}}> Name : </span> Doha Kaled
                  <br />
                  <span style={{color: "#746D6E"}}> Country : </span> Egypt
                  <br/>
                  <span style={{color: "#746D6E"}}> City : </span> Cairo
                  <br/>
                  <span style={{color: "#746D6E"}}> Blood type : </span> B+
                  <br/>
                  <span style={{color: "#746D6E"}}> Hospital : </span> Ibn Sina
                </p>
                <NavLink to="/chat">
               <button class="btn btn-outline-danger">Connect</button>
              </NavLink>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card cardd">
              <img src={Image2} class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Patient</h5>
                <p className="card-text cardtext"><span style={{color: "#746D6E"}}> Name : </span> Doha Kaled
                  <br />
                  <span style={{color: "#746D6E"}}> Country : </span> Egypt
                  <br/>
                  <span style={{color: "#746D6E"}}> City : </span> Cairo
                  <br/>
                  <span style={{color: "#746D6E"}}> Blood type : </span> B+
                  <br/>
                  <span style={{color: "#746D6E"}}> Hospital : </span> Ibn Sina</p>
                  <NavLink to="/chat">
               <button class="btn btn-outline-danger">Connect</button>
              </NavLink>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card cardd">
              <img src={Image2} class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Patient</h5>
                <p className="card-text cardtext"><span style={{color: "#746D6E"}}> Name : </span> Doha Kaled
                  <br />
                  <span style={{color: "#746D6E"}}> Country : </span> Egypt
                  <br/>
                  <span style={{color: "#746D6E"}}> City : </span> Cairo
                  <br/>
                  <span style={{color: "#746D6E"}}> Blood type : </span> B+
                  <br/>
                  <span style={{color: "#746D6E"}}> Hospital : </span> Ibn Sina</p>
                  <NavLink to="/chat">
               <button class="btn btn-outline-danger">Connect</button>
              </NavLink>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card cardd">
              <img src={Image2} class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Patient</h5>
                <p className="card-text cardtext"><span style={{color: "#746D6E"}}> Name : </span> Doha Kaled
                  <br />
                  <span style={{color: "#746D6E"}}> Country : </span> Egypt
                  <br/>
                  <span style={{color: "#746D6E"}}> City : </span> Cairo
                  <br/>
                  <span style={{color: "#746D6E"}}> Blood type : </span> B+
                  <br/>
                  <span style={{color: "#746D6E"}}> Hospital : </span> Ibn Sina 
                  </p>
                  <NavLink to="/chat">
               <button class="btn btn-outline-danger">Connect</button>
              </NavLink>
              </div>
            </div>
          </div>
        </div> 
        <div className= "footterr">
        <ul class="list-unstyled list-inline text-center">
        <p style={{fontWeight: "bold",fontSize: "23px"}}>
      We are also in 
      </p>
      
      <li class="list-inline-item">
        <a class="btn-floating btn-tw mx-1" style={{fontWeight: "bold",fontSize: "26px", color:"black"}}>
        <img src={ins} style={{width:"50px", height:"50px", marginRight: "10px"}}/>
        </a>
      </li>
   
      <li class="list-inline-item">
        <a class="btn-floating btn-li mx-1" style={{fontWeight: "bold",fontSize: "26px", color:"black"}}>
          <img src={facebook} style={{width:"40px", height:"40px" , marginRight: "10px"}}/> 
        </a>
      </li>
      <li class="list-inline-item">
        <a class="btn-floating btn-dribbble mx-1" style={{fontWeight: "bold",fontSize: "26px", color:"black"}}>
        <img src={tweeter} style={{width:"40px", height:"40px"}}/>
        </a>
      </li>
      <p>Copyright © 2020 - 2021 <br/> All Rights Reserved to our graduation project team</p>
    </ul>
    </div>
      </div>
        );
    }
}
export default NeederList;