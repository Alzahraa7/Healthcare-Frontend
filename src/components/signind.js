import '../SignIn.css';
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import useSignUpForm from '../customHook';
import validate from './validation'

function SignInd() {
 const {handleChange, values, handleSubmit, errors} = useSignUpForm(validate);
  return (
      <div className="big">
        <div className="container">
          <div className="div11 row">
            <div className="child col-5">
              <p className="ttitle">
                Welcome Back! <br/>
                To keep connected with  us, Please login
              </p> 
              <Link to="/login">
               <button className="signIn">Login</button>
              </Link>
            </div>
            <div className="child2 col-7">
            <br/>
              <h3>Create your account</h3>
              <br/>
              <form className="container" style={{marginLeft:"30px"}} onSubmit={handleSubmit}>
              {errors.Firstname &&<pre className="m-0 !important;" style={{textAlign:"center", color:"red"}}>{ errors.Firstname}</pre>}
                <label
                style={{fontFamily:"Quattrocento Sans", color: "#BC007C",marginLeft:"5px", fontSize: "20px"}}>
                First name&nbsp;&nbsp;&nbsp; 
                </label>
                <input
                style={{width: "300px", height: "20px", background: "rgba(0, 0, 0, 0.1)", borderRadius: "3px", marginLeft:"5px"}}
                type="text"
                name="Firstname"
                value={values.Firstname}
                onChange={handleChange}
                />
                <br />
                {errors.Lastname &&<pre className="m-0" style={{textAlign:"center", color:"red"}}>{ errors.Lastname}</pre>}
              
                <label style={{fontFamily:"Quattrocento Sans", right: "1025px",marginLeft:"5px", color: "#BC007C", fontSize: "20px"}}>Last name&nbsp;&nbsp;&nbsp;</label>
                <input style={{width: "300px", height: "20px", background: "rgba(0, 0, 0, 0.1)", borderRadius: "3px", marginLeft:"9px"}} type="text" 
                name="Lastname"
                value={values.Lastname}
                onChange={handleChange}
                 /> 
                 <br />
                 {errors.Age &&<pre className="m-0" style={{textAlign:"center", color:"red"}}>{ errors.Age}</pre>}
                
                <label style={{fontFamily:"Quattrocento Sans", right: "1025px",marginLeft:"5px", color: "#BC007C", fontSize: "20px"}}>Birth date&nbsp;&nbsp;</label>
                <input style={{width: "300px", height: "20px", background: "rgba(0, 0, 0, 0.1)", borderRadius: "3px", marginLeft:"15px"}} type="date" 
                name="Age"
                value={values.Age}
                onChange={handleChange}
                 />
                <br/>
                
                <label style={{fontFamily:"Quattrocento Sans", right: "1025px",marginLeft:"7px", color: "#BC007C", fontSize: "20px"}}>City&nbsp;&nbsp;&nbsp;&nbsp; </label>
                <select style={{width: "300px", height: "20px", background: "rgba(0, 0, 0, 0.1)", borderRadius: "3px", marginLeft:"50px"}} name="City"
                 required >
                  <option> </option>
                  <option>Cairo</option>
                  <option>Madrid</option>
                </select>
                <br/>
                <label style={{fontFamily:"Quattrocento Sans", right: "1025px",marginLeft:"7px", color: "#BC007C", fontSize: "20px"}}>Phone&nbsp;&nbsp; </label>
                <input style={{width: "300px", height: "20px", background: "rgba(0, 0, 0, 0.1)", borderRadius: "3px", marginLeft:"44px"}} type="number" min="1" 
                name="Phone"
                required />
                <br/>
                <label style={{fontFamily:"Quattrocento Sans", right: "1025px",marginLeft:"5px", color: "#BC007C", fontSize: "20px"}}>Gender&nbsp; </label>
                <input style={{width: "60px", height: "15px", background: "rgba(0, 0, 0, 0.1)", borderRadius: "3px"}} type="radio" name="Gender" required /> Male&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input style={{width: "60px", height: "15px", background: "rgba(0, 0, 0, 0.1)", borderRadius: "3px"}} type="radio" name="Gender" required/> Female
                <br/>
                <label style={{fontFamily:"Quattrocento Sans", right: "1025px", color: "#BC007C",marginLeft:"7px", fontSize: "20px"}}>I'm a&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </label>
                <input style={{width: "60px", height: "15px", background: "rgba(0, 0, 0, 0.1)", borderRadius: "3px"}} type="radio" name="job" required /> Doctor&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input style={{width: "60px", height: "15px", background: "rgba(0, 0, 0, 0.1)", borderRadius: "3px"}} type="radio" name="job" required /> Patient
                <br/>
                {errors.Email &&<pre className="m-0" style={{textAlign:"center", color:"red"}}>{ errors.Email}</pre>}
                
                <label style={{fontFamily:"Quattrocento Sans", right: "1025px",marginLeft:"5px", color: "#BC007C", fontSize: "20px"}}>Email&nbsp;&nbsp; </label>
                <input style={{width: "300px", height: "20px", background: "rgba(0, 0, 0, 0.1)", borderRadius: "3px", marginLeft:"45px"}} type="email" name="Email"
                value={values.Email}
                onChange={handleChange} />
                <br/>
                {errors.Password &&<pre className="m-0" style={{textAlign:"center", color:"red"}}>{ errors.Password}</pre>}
                
                <label style={{fontFamily:"Quattrocento Sans", right: "1025px",marginLeft:"5px", color: "#BC007C", fontSize: "20px"}}>Password&nbsp; </label>
                <input style={{width: "300px", height: "20px", background: "rgba(0, 0, 0, 0.1)", borderRadius: "3px", marginLeft:"22px"}} type="password" name="Password"
                value={values.Password}
                onChange={handleChange} />
                {errors.Password2 &&<pre className="m-0" style={{textAlign:"center", color:"red"}}>{ errors.Password2}</pre>}
               
                <label style={{fontFamily:"Quattrocento Sans", right: "1025px", marginLeft:"5px",color: "#BC007C", fontSize: "20px"}}>Confirm password&nbsp; </label>
                <input style={{width: "242px", height: "20px", background: "rgba(0, 0, 0, 0.1)", borderRadius: "3px", marginLeft:"7px"}} type="password" 
                value={values.Password2}
                onChange={handleChange}
                name="Password2"
                />
                <br/>
                 <Link to="/moresignupd">
                <button className="next">Next </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
}

export default SignInd;