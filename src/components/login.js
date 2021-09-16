import '../LogIn.css'
import React, {useState} from 'react';
import useSignUpForm from '../customHook';
import {Link} from 'react-router-dom';
import validate from './validation'

function LogIn() {
 const {handleChange, values, handleSubmit, errors} = useSignUpForm(validate);
  return (
      <div className="big">
        <div className="container">
          <div className="div11 row">
            <div className="child col-5">
              <p className="ttitle">
              Welcome , Dear! <br/>
              We will make you safe from your home.
              </p>
              <pre className="secttitle">If you don't have an account, please signup</pre>
              <Link to="/signind">
               <button className="secsignupd">SignUp as a doctor</button>
              </Link>
              <Link to="/signin">
               <button className="secsignupp">SignUp as a patient</button>
              </Link>
            </div>
            <div className="child2 col-7">
            <br/>
              <h3 className="mt-3">Sign In</h3>
              <br/>
              <form className="form" style={{marginLeft:"30px"}} onSubmit={handleSubmit}>
                <label
                style={{fontFamily:"Quattrocento Sans", color: "#BC007C",marginLeft:"5px", fontSize: "20px"}}>
                Email&nbsp;&nbsp;&nbsp; 
                </label>
                <input
                style={{width: "300px", height: "20px", background: "rgba(0, 0, 0, 0.1)", borderRadius: "3px", marginLeft:"37px"}}
                type="email"
                name="Email"
                value={values.Email}
                onChange={handleChange}
                />
                <br/>
                <label style={{fontFamily:"Quattrocento Sans", right: "1025px",marginLeft:"5px", color: "#BC007C", fontSize: "20px"}}>Password&nbsp;&nbsp;&nbsp;</label>
                <input style={{width: "300px", height: "20px", background: "rgba(0, 0, 0, 0.1)", borderRadius: "3px", marginLeft:"9px"}} type="password" name="Password"
                value={values.Password}
                onChange={handleChange}/> <br/>
                <br/> <br/>
                <Link to="/patientprofile" >
                <button className="login">SignIn</button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
}

export default LogIn;