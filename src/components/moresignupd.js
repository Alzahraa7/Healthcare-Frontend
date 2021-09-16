import '../SignIn.css';
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import useSignUpForm from '../customHook';
import validate from './validation'

function MoreSignupD() {
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
              <h3 className="mt-4">Hello, Doctor</h3>
              <br/>
              <form className="container mt-3" style={{marginLeft:"30px"}} onSubmit={handleSubmit}>
              {errors.University &&<pre className="m-0 !important;" style={{textAlign:"center", color:"red"}}>{ errors.University}</pre>}
                <label
                style={{fontFamily:"Quattrocento Sans", color: "#BC007C",marginLeft:"5px", fontSize: "20px"}}>
                University&nbsp;&nbsp;&nbsp; 
                </label>
                <input
                style={{width: "300px", height: "20px", background: "rgba(0, 0, 0, 0.1)", borderRadius: "3px", marginLeft:"5px"}}
                type="text"
                name="University"
                value={values.University}
                onChange={handleChange}
                />
                <br />
                {errors.Faculty &&<pre className="m-0" style={{textAlign:"center", color:"red"}}>{ errors.Faculty}</pre>}
              
                <label style={{fontFamily:"Quattrocento Sans", right: "1025px",marginLeft:"5px", color: "#BC007C", fontSize: "20px"}}>Faculty&nbsp;&nbsp;&nbsp;</label>
                <input style={{width: "300px", height: "20px", background: "rgba(0, 0, 0, 0.1)", borderRadius: "3px", marginLeft:"30px"}} type="text" 
                name="Faculty"
                value={values.Faculty}
                onChange={handleChange}
                 /> 
                 <br />
                 {errors.Graduate &&<pre className="m-0" style={{textAlign:"center", color:"red"}}>{ errors.Graduate}</pre>}
              
                <label style={{fontFamily:"Quattrocento Sans", right: "1025px",marginLeft:"2px", color: "#BC007C", fontSize: "20px"}}>Graduation date&nbsp;</label>
                <input style={{width: "263px", height: "20px", background: "rgba(0, 0, 0, 0.1)", borderRadius: "3px", marginLeft:"10px"}} type="Date" 
                name="Graduate"
                value={values.Graduate}
                onChange={handleChange}
                 /> 
                 <br />
                <label style={{fontFamily:"Quattrocento Sans", right: "1025px",marginLeft:"1px", color: "#BC007C", fontSize: "20px"}}>Your specialty&nbsp;&nbsp;&nbsp; </label>
                <select style={{width: "270px", height: "20px", background: "rgba(0, 0, 0, 0.1)", borderRadius: "3px", marginLeft:"7px"}} name="Specialty"
                 required >
                  <option> </option>
                  <option>digestive system</option>
                  <option>Respiratory device</option>
                </select>
                <br/>
                <label style={{fontFamily:"Quattrocento Sans", right: "1025px",marginLeft:"2px", color: "#BC007C", fontSize: "20px"}}>Last medical degree </label>
                <input style={{width: "233px", height: "20px", background: "rgba(0, 0, 0, 0.1)", borderRadius: "3px", marginLeft:"14px"}} type="text"  
                name="Lastcert"
                required />
                <br/>
                 {errors.ddegree &&<pre className="m-0" style={{textAlign:"center", color:"red"}}>{ errors.Graduate}</pre>}
              
                <label style={{fontFamily:"Quattrocento Sans", right: "1025px",marginLeft:"2px", color: "#BC007C", fontSize: "20px"}}>Date of this degree&nbsp;</label>
                <input style={{width: "250px", height: "20px", background: "rgba(0, 0, 0, 0.1)", borderRadius: "3px", marginLeft:"1px"}} type="Date" 
                name="ddegree"
                value={values.ddegree}
                onChange={handleChange}
                 /> 
                 <br />
                <label style={{fontFamily:"Quattrocento Sans", right: "1025px",marginLeft:"5px", color: "#BC007C", fontSize: "20px"}}>Work Place&nbsp; </label>
                <select style={{width: "300px", height: "20px", background: "rgba(0, 0, 0, 0.1)", borderRadius: "3px", marginLeft:"10px"}}  name="Workplace"
                 >
                     <option></option>
                     <option>Elzamalik, Giza</option>
                     <option>Elmaadi, Cairo</option>
                     <option>Elharam, Giza</option>
                 </select>
                <br/>
                
                <br/>
                 <Link to="/doctorprofile">
                <button className="signUp">Sign up </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
}

export default MoreSignupD;