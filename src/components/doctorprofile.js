import React from 'react';
import '../doctorp.css';
import Image from '../imges/doctor.png';
import Card from 'react-bootstrap/esm/Card';
import CardGroup from 'react-bootstrap/esm/CardGroup';
import Button from 'react-bootstrap/esm/Button';
import boy from '../imges/man.png'
import Navv from './nav';
import Footeer from './footer';
import { Link } from 'react-router-dom';

function DoctorProfile() {

    return (
        <>
        <Navv />
            <div className="doctorinf ">
                <img src={Image} style={{ marginLeft: "77px", width: "90px", height: "90px" }} />
                <div className="container col-9">
                    Dr.Ahmed Ali <br />
                    Elzmalek, Giza, Egypt <br />
                    01065205286 <br />
                    Work place  <br />
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                </div >
            </div>
            <div className="docpatient container mt-3">
                <span className="spatient ">My patients</span>
                <CardGroup className="mt-3 mb-5">
                    <div className="container">
                        <div className="row m-3">
                                <Card className="mr-3 caard col">
                                    <Card.Img variant="top" src={boy} style={{ position: "relative", width: "90px", height: "90px", left: "35%" }} />
                                    <Card.Body>
                                        <Card.Text style={{ fontSize: "17px", textAlign: "center" }}>
                                            Youssef salah
                                            <br />
                                            01065281550
                                            <br />
                                            He has a Corona
                                        </Card.Text>
                                    </Card.Body>
                                    <Link to="/Chat" >
                                    <Button style={{ position: "relative", left: "25%", width: "50%" }} variant="primary">Contact</Button>
                                    </Link>
                                </Card>
                                <Card className="mr-3 caard col">
                                    <Card.Img variant="top" src={boy} style={{ position: "relative", width: "90px", height: "90px", left: "35%" }} />
                                    <Card.Body>
                                        <Card.Text style={{ fontSize: "17px", textAlign: "center" }}>
                                            Youssef salah
                                            <br />
                                            01065281550
                                            <br />
                                            He has a Corona
                                        </Card.Text>
                                    </Card.Body>
                                    <Link to="/Chat" >
                                    <Button style={{ position: "relative", left: "25%", width: "50%" }} variant="primary">Contact</Button>
                                    </Link>
                               </Card>
                                <Card className="mr-3 caard col">
                                    <Card.Img variant="top" src={boy} style={{ position: "relative", width: "90px", height: "90px", left: "35%" }} />
                                    <Card.Body>
                                        <Card.Text style={{ fontSize: "17px", textAlign: "center" }}>
                                            Youssef salah
                                            <br />
                                            01065281550
                                            <br />
                                            He has a Corona
                                        </Card.Text>
                                    </Card.Body>
                                    <Link to="/Chat" >
                                    <Button style={{ position: "relative", left: "25%", width: "50%" }} variant="primary">Contact</Button>
                                    </Link>
                                </Card>
                        </div>
                        <div className="row m-3">
                                <Card className="mr-3 caard col">
                                    <Card.Img variant="top" src={boy} style={{ position: "relative", width: "90px", height: "90px", left: "35%" }} />
                                    <Card.Body>
                                        <Card.Text style={{ fontSize: "17px", textAlign: "center" }}>
                                            Youssef salah
                                            <br />
                                            01065281550
                                            <br />
                                            He has a Corona
                                        </Card.Text>
                                    </Card.Body>
                                    <Link to="/Chat" >
                                    <Button style={{ position: "relative", left: "25%", width: "50%" }} variant="primary">Contact</Button>
                                    </Link>
                                </Card>
                                <Card className="mr-3 caard col">
                                    <Card.Img variant="top" src={boy} style={{ position: "relative", width: "90px", height: "90px", left: "35%" }} />
                                    <Card.Body>
                                        <Card.Text style={{ fontSize: "17px", textAlign: "center" }}>
                                            Youssef salah
                                            <br />
                                            01065281550
                                            <br />
                                            He has a Corona
                                        </Card.Text>
                                    </Card.Body>
                                    <Link to="/Chat" >
                                    <Button style={{ position: "relative", left: "25%", width: "50%" }} variant="primary">Contact</Button>
                                    </Link>
                                </Card>
                                <Card className="mr-3 caard col">
                                    <Card.Img variant="top" src={boy} style={{ position: "relative", width: "90px", height: "90px", left: "35%" }} />
                                    <Card.Body>
                                        <Card.Text style={{ fontSize: "17px", textAlign: "center" }}>
                                            Youssef salah
                                            <br />
                                            01065281550
                                            <br />
                                            He has a Corona
                                        </Card.Text>
                                    </Card.Body>
                                    <Button style={{ position: "relative", left: "25%", width: "50%" }} variant="primary">Contact</Button>
                                </Card>
                        </div>
                    </div>
                </CardGroup>
            </div>
            <Footeer />
        </>
    );
}

export default DoctorProfile;