import React from 'react';
import '../doctorp.css';
import Image from '../imges/doctor.png';
import Card from 'react-bootstrap/esm/Card';
import CardGroup from 'react-bootstrap/esm/CardGroup';
import Button from 'react-bootstrap/esm/Button';
import boy from '../imges/man.png'

function PDoctorView() {

    return (
        <>
            <div className="doctorinf ">
                <img src={boy} style={{ marginLeft: "77px", width: "90px", height: "90px" }} />
                <div className="container col-9">
                Zahra Mohmed<br /> 
                Elzmalek, Giza, Egypt <br />
                    01065205286 <br />
                </div >
            </div>
            <div className="docpatient container mt-3">
                <div className="spatient ">
                <span >Status</span> </div>
                <div className="container status">
                  <p className="mt-3 parg" style={{fontWeight:"bold"}}> He did his survey today </p> 
                </div>
                <div className="spatient mt-3 ">
                <span >Doctors</span> </div>
                <CardGroup className="mt-3 mb-5">
                    <div className="container">
                        <div className="row m-3">
                                <Card className="mr-3 caard col">
                                    <Card.Img variant="top" src={Image} style={{ position: "relative", width: "90px", height: "90px", left: "35%" }} />
                                    <Card.Body>
                                        <Card.Text style={{ fontSize: "17px", textAlign: "center" }}>
                                        Youssef salah
                                            <br />
                                            01065281550
                                            <br />
                                            PhD in respiratory diseases
                                        </Card.Text>
                                    </Card.Body>
                                    <Button className="bContact" style={{ position: "relative", left: "25%", width: "50%" , background: "#41C6CE" }} variant="primary">Contact</Button>
                                </Card>
                                <Card className="mr-3 caard col">
                                    <Card.Img variant="top" src={Image} style={{ position: "relative", width: "90px", height: "90px", left: "35%" }} />
                                    <Card.Body>
                                        <Card.Text style={{ fontSize: "17px", textAlign: "center" }}>
                                        Youssef salah
                                            <br />
                                            01065281550
                                            <br />
                                            PhD in respiratory diseases
                                        </Card.Text>
                                    </Card.Body>
                                    <Button style={{ position: "relative", left: "25%", width: "50%" , background: "#41C6CE" }} variant="primary">Contact</Button>
                                </Card>
                                <Card className="mr-3 caard col">
                                    <Card.Img variant="top" src={Image} style={{ position: "relative", width: "90px", height: "90px", left: "35%" }} />
                                    <Card.Body>
                                        <Card.Text style={{ fontSize: "17px", textAlign: "center" }}>
                                        Youssef salah
                                            <br />
                                            01065281550
                                            <br />
                                            PhD in respiratory diseases
                                        </Card.Text>
                                    </Card.Body>
                                    <Button style={{ position: "relative", left: "25%", width: "50%" , background: "#41C6CE" }} variant="primary">Contact</Button>
                                </Card>
                            </div>
                        </div>
                </CardGroup>
            </div>
        </>
    );
}

export default PDoctorView;