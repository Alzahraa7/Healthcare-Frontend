import React from "react";
import Navv from "./nav";
import Footeer from "./footer";
import '../settings.css';
import woman from '../imges/woman.png';
import useSignUpForm from '../customHook';

function Settings() {
 const {inputs, handleInputChange, handleSubmit}=useSignUpForm();
    return (
        <>
            <Navv />
            <h2 className="ml-3" style={{ fontSize: "30px", textShadow: "2px 2px #70e7e7" }}> <b>Account Settings</b> </h2>
            <div className="sett mt-3 mb-3 container">
                <img src={woman} className="ima"/>
                <form onSubmit={handleSubmit}>
                <div className="container" >
                    <div className="row field">
                        <div className="col-6">
                            <label className="m-3 edit">First name </label> <br />
                            <input className="ml-3 inputEdit" type="text" style={{ width: "222px" }} />
                        </div>
                        <div className="col-6">
                            <label className="m-3 edit">Last name </label> <br />
                            <input className="ml-3 inputEdit" type="text" style={{ width: "222px" }} />
                        </div>
                    </div>
                    <hr />
                    <div className="row field">
                        <div className="col-6">
                            <label className="m-2 edit">Phone </label> <br />
                            <input className="ml-3 inputEdit" type="number" style={{ width: "222px" }} />
                        </div>
                        <div className="col-6">
                            <label className="m-2 edit">Gender </label> <br />
                            <select className="ml-3 inputEdit" type="text" style={{ width: "222px" }}>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>
                    </div>
                    <hr />
                    <div className="row field">
                        <div className="col-6">
                            <label className="m-3 edit">Birth date </label> <br />
                        </div>
                        <div className="col-6">
                            <input className="ml-3 mt-3 inputEdit" type="date" style={{ width: "222px" }} />
                        </div>
                    </div>
                    <hr />
                    <div className="row field">
                        <div className="col-6">
                            <label className="m-3 edit">New password </label> <br />
                        </div>
                        <div className="col-6">
                            <input className="ml-3 mt-3 inputEdit" type="password" style={{ width: "222px" }} />
                        </div>
                    </div>
                    <button className="mt-2 mb-2 btn btn-primary" style={{position:"relative", width:"100px" ,left:"38%"}}>Edit</button>
                </div>
                </form>
            </div>
            <Footeer />
        </>
    );
}

export default Settings;