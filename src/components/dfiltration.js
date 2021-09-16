import React from 'react';
import Footeer from './footer';
import Navv from './nav';
import '../dfiltration.css';
import doctor from '../imges/doctor.png';
import sm from '../imges/stethoscope.png';
import loc from '../imges/placeholder.png';
import {Link} from 'react-router-dom';

function DFiltration() {

    return (
        <>
        <Navv />
        <p className="message">
            <br/>
        Unfortunately, your health condition requires contacting a doctor <br/>
        So, we highly recommend our doctors to treat you..  
        </p>
        <div className="doccard mt-5 mb-5">
            <img className="ml-3 im" src={doctor} />
            <Link to="/dpatientview" >
            <button className="bu">Need help</button>
            </Link>
            <div className="container">
                <img src={sm} width="40px" height="40px" style={{position:"relative", left: "10px",top: "110px"}}/>
                <p className="docin">DR<b>.Mohamed Ahmed</b> <br/>
                Internist doctor, Specialist in the heart and respiratory system</p>
                <img src={loc} width="40px" height="40px" style={{position:"relative", left: "10px",top: "95px"}}/>
                <p className="docin">Eltaawen, Haram, Giza, Egypt</p>
            </div>
        </div>
        <Footeer />
        </>
    );
}

export default DFiltration;