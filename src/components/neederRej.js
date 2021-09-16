import { Component } from 'react';
import "../rej.css"
import heart from '../imges/dl.jpg'
import {NavLink} from 'react-router-dom';
class NeederReg extends Component {
handleSubmit = (e) => 
{
  e.preventDefault();
}
    render()
    {
      return (
  
<div className="bigbig">
  <div className="row roow">
    <div className="col10" >
      
    <p className="title">
                We are here to help you 
            </p> 
    </div>

    <div className="col" style={{background:"#D1D1D1" , position: "relative", width: "600px",height: "600px", borderRadius: "0px 50px 50px 0px",boxShadow: "inset 0px 0px 9px 3px rgba(0, 0, 0, 0.25)"}}>
    <br/>
                <h3 className="reg">Register your info</h3>
                <br/>
                <form className="form mt-3" onSubmit={this.handleSubmit} style={{marginLeft:"30px" , backgroundColor:"#D1D1D1"}}>
                <label className="llabell"
                style={{fontFamily:"Quattrocento Sans", marginLeft:"5px", fontSize: "20px"}}>
                Name
                </label>
                <input
                className="inputtt" style={{width: "300px", height: "20px", background: "#FFFFFF", borderRadius: "3px", marginLeft:"50px"}}
                type="text"
                name="Name"
                required/>
                <br/>
                <label className="llabell" style={{fontFamily:"Quattrocento Sans", right: "1025px",marginLeft:"7px", fontSize: "20px"}}>Country&nbsp;&nbsp;&nbsp;&nbsp; </label>
                <select style={{width: "300px", height: "20px", background: "#FFFFFF", borderRadius: "3px", marginLeft:"10px"}} name="country"
                required >
                  <option> </option>
                  <option>Egypt</option>
                  <option>America</option>
                </select>
                <br/>
                <label className="llabell" style={{fontFamily:"Quattrocento Sans", right: "1025px",marginLeft:"7px", fontSize: "20px"}}>City&nbsp;&nbsp;&nbsp;&nbsp; </label>
                <select style={{width: "300px", height: "20px", background: "#FFFFFF", borderRadius: "3px", marginLeft:"45px"}} name="City"
                required >
                  <option> </option>
                  <option>Cairo</option>
                  <option>Alex</option>
                </select>
                <br/>
                
                <label className="llabell" style={{fontFamily:"Quattrocento Sans", right: "1025px",marginLeft:"7px", fontSize: "20px"}}>Phone&nbsp;&nbsp; </label>
                <input className="inputtt" style={{width: "300px", height: "20px", background: "#FFFFFF", borderRadius: "3px", marginLeft:"40px"}} type="number" name="Phone"
                required/>
                <br/>
                <label className="llabell" style={{fontFamily:"Quattrocento Sans", right: "1025px",marginLeft:"5px", fontSize: "20px"}}>Age</label>
                <input className="inputtt" style={{width: "300px", height: "20px", background: "#FFFFFF", borderRadius: "3px", marginLeft:"75px"}} type="number" min="1" name="Age"
                required/>
    
                <br/>
                <label
                className="llabell" style={{fontFamily:"Quattrocento Sans", marginLeft:"5px", fontSize: "20px"}}>
                Hospital
                </label>
                <input
                className="inputtt" style={{width: "300px", height: "20px", background: "#FFFFFF", borderRadius: "3px", marginLeft:"35px"}}
                type="text"
                name="hospitalName"
                required/>
                <br/>
                <input className="inputtt" style={{width: "30px", height: "15px", background: "#FFFFFF", borderRadius: "3px"}} type="radio" name="Gender" /> Male&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input className="inputtt" style={{width: "30px", height: "15px", background: "#FFFFFF", borderRadius: "3px"}} type="radio" name="Gender" /> Female&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <label className="llabell" style={{fontFamily:"Quattrocento Sans", right: "1025px",marginLeft:"7px", fontSize: "18px"}}>Blood type </label>
                <select style={{width: "80px", height: "25px", background: "#FFFFFF", borderRadius: "3px", marginLeft:"15px"}} name="bloodType"
                required >
                  <option>A+</option>
                  <option>A-</option>
                  <option>B+</option>
                  <option>B-</option>
                  <option>AB+</option>
                  <option>AB-</option>
                  <option>O+</option>
                  <option>O-</option>
                </select>
                <br />
                <label className="llabell" style={{fontFamily:"Quattrocento Sans", right: "1025px",marginLeft:"7px", fontSize: "20px"}}>How mony blood bags you need? </label>
                <input className="inputtt" style={{width: "80px", height: "25px", background: "#FFFFFF", borderRadius: "3px", marginLeft:"45px"}} type="number" min="1" name="Age"
                required/>
                <br/>
                <label className="llabell" style={{fontFamily:"Quattrocento Sans", right: "1025px",marginLeft:"5px", fontSize: "20px"}}>What is patient's condition?</label>
                <textarea style={{width: "300px", height: "60px", background: "#FFFFFF", borderRadius: "3px", marginLeft:"120px"}} type="text" name="comment"
                required/>
                <br/>
                <NavLink to="/DonorList">
                <button className="submmit" type="submit" value="Submit">Submit</button>
                </NavLink>
                <button className="cancel" type="reset" value="Reset">Cancel</button>
                </form>
    </div>
  </div>
</div>
      )
    }
}
export default NeederReg;