import React from 'react';
import '../doctorp.css';
import Image from '../imges/doctor.png';
import Button from 'react-bootstrap/esm/Button';
import check from '../imges/check.png'
import Navv from './nav';
import Footeer from './footer';
import 'react-toastify/dist/ReactToastify.css';
import {toast} from 'react-toastify';
toast.configure()

function DPatientView() {
    const notify = ()=>{ 
        // Calling toast method by passing string
        toast('Request sent, Please wait until Doctor accept the request') 
    }
    return (
        <>
        <Navv />
            <div className="doctorinf ">
                <img src={Image} style={{ marginLeft: "77px", width: "90px", height: "90px" }} />
                <div className="container col-9">
                    Dr.Ahmed Ali <br />
                    Elzmalek, Giza, Egypt <br />
                    01065205286 <br />
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                </div>
            </div>
            <div className="docinfo container mt-3">
                <ul>
                    <li style={{fontSize:"20px" ,fontWeight: "bold"}}> PhD in respiratory diseases </li>
                    <div className="row">
                    <li  className="col-5" style={{fontSize:"20px" ,fontWeight: "bold"}}> He successfully treated 20 cases of corona </li>
                    <img className="col-1" src={check} width="10px" height="40px"/>
                    </div>
                    <li style={{fontSize:"20px" ,fontWeight: "bold"}}> Work place </li>
                </ul>
                <Button className="bcontact" onClick={notify} style={{ position: "relative", left: "60%", width: "15%" ,background: "rgba(65, 198, 206, 0.5)", color:"black", fontWeight:"bold", borderRadius: "10px"}} variant="primary">Contact with</Button>
            </div>
            <Footeer />
        </>
    );
}

export default DPatientView;