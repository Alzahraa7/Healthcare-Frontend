import { useHistory } from 'react-router-dom';
import React, {useState, useEffect} from 'react';

const useSignUpForm = (validate) =>{
    const [values,setValues] = useState({
        Firstname:'',
        Lastname: '',
        Age: '',
        Email:'',
        Password:'',
        Password2:'',
        University:'',
        Faculty:'',
        Graduate:'',
        ddegree:''
    })
    const [errors,setErrors] = useState({});
    //const [inputs,setInputs]= useState({});
    const handleSubmit = (event)=>{
        if(event){
            event.preventDefault();
            setErrors(validate(values));
        }
    }
    const handleChange = e =>{
        const{name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
    }
    /*const handleInputChange = (event)=>{
        event.persist();
        setInputs(inputs=>({...inputs, [event.target.name]:event.target.value}));
    }*/
    return {
       handleChange, values, handleSubmit, errors
    };
}

export default useSignUpForm;