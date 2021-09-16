import '../survey.css';
import useSignUpForm from '../customHook';
import React, {useState} from 'react';
import {Link} from 'react-router-dom';

function Survey() {
    const [status, setStatus] = React.useState(0)
    const {inputs, handleInputChange, handleSubmit}=useSignUpForm();
    const radioHandler = (status) => {
        setStatus(status);
    }
    return (
        <div className="bigsurvey" >
            <div className="container" >
                <div className="div11 row" >
                    <div className="childsurvey" >
                        <h2 className="spann">Check on yourself</h2>
                        <div className="questions" >
                            <div style={{ fontSize: "20px", position: "relative", textAlign: "center", marginLeft: "444px" }}>Yes &nbsp; No</div>
                            <form onSubmit={handleSubmit}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-8">
                                        Do you have a fever ? <br />
                                        <span style={{ display: status === 1 ? 'block' : 'none' }}>Okay, Scale your tempreture </span>
                                        Do you have a dry cough? <br />
                                        Do you have a headache? <br />
                                        Do you have a Difficulty breathing or shortness of breath? <br />
                                        Do you have a chest pain? <br />
                                        Do you have a loss of sense of taste or smell? <br />
                                        Do you have a diarrhea? <br />
                                        Do you have a loss of ability to speak or move? <br />
                                        Do you have a sore throat? <br />
                                    </div>
                                    <div className="col-4">
                                        <input style={{ height: "20px", width: "20px" }} name="1" type="radio" className="ml-2 mr-2" checked={status === 1} onClick={(e) => radioHandler(1)} required/>
                                        <input style={{ height: "20px", width: "20px" }} name="1" type="radio" className="ml-2 mr-2" checked={status === 2} onClick={(e) => radioHandler(2)} /> <br />
                                        <select style={{ display: status === 1 ? 'block' : 'none', marginTop: "5px", marginBottom: "10px" }} required>
                                            <option>36.5-37.5</option>
                                            <option>37.5-38.5</option>
                                            <option>38.5-39.5</option>
                                        </select>
                                        <input style={{ height: "20px", width: "20px" }} name="2" type="radio" className="ml-2 mr-2" required/>
                                        <input style={{ height: "20px", width: "20px" }} name="2" type="radio" className="ml-2 mr-2" /> <br />
                                        <input style={{ height: "20px", width: "20px" }} name="3" type="radio" className="ml-2 mr-2" required/>
                                        <input style={{ height: "20px", width: "20px" }} name="3" type="radio" className="ml-2 mr-2" /> <br />
                                        <input style={{ height: "20px", width: "20px" }} name="4" type="radio" className="ml-2 mr-2" required/>
                                        <input style={{ height: "20px", width: "20px" }} name="4" type="radio" className="ml-2 mr-2" /> <br />
                                        <input style={{ height: "20px", width: "20px" }} name="5" type="radio" className="ml-2 mr-2" required/>
                                        <input style={{ height: "20px", width: "20px" }} name="5" type="radio" className="ml-2 mr-2" /> <br />
                                        <input style={{ height: "20px", width: "20px" }} name="6" type="radio" className="ml-2 mr-2" required/>
                                        <input style={{ height: "20px", width: "20px" }} name="6" type="radio" className="ml-2 mr-2" /> <br />
                                        <input style={{ height: "20px", width: "20px" }} name="7" type="radio" className="ml-2 mr-2" required/>
                                        <input style={{ height: "20px", width: "20px" }} name="7" type="radio" className="ml-2 mr-2" /> <br />
                                        <input style={{ height: "20px", width: "20px" }} name="8" type="radio" className="ml-2 mr-2" required/>
                                        <input style={{ height: "20px", width: "20px" }} name="8" type="radio" className="ml-2 mr-2" /> <br />
                                        <input style={{ height: "20px", width: "20px" }} name="9" type="radio" className="ml-2 mr-2" required/>
                                        <input style={{ height: "20px", width: "20px" }} name="9" type="radio" className="ml-2 mr-2" /> <br />
                                    </div>
                                </div>
                            </div>
                            <Link to="/dfiltration">
                            <button className="submit">Submit</button>
                            </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Survey;