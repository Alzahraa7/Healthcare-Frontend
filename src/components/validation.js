export default function validateInfo(values){
    let errors ={}

    if(!values.Firstname.trim()){
        errors.Firstname = "First name required"
    }

    if(!values.Lastname.trim()){
        errors.Lastname = "Last name required"
    }

    if(!values.University.trim()){
        errors.University = "University required"
    }

    if(!values.Faculty.trim()){
        errors.Faculty = "Faculty required"
    }

    if(!values.Graduate){
        errors.Graduate = "Graduation date required"
    }
    
    if(!values.ddegree){
        errors.ddegree = "Degree date required"
    }

    if(!values.Age.trim()){
        errors.Age = "Age required"
    }

    if(!values.Email){
        errors.Email = "Email required"
    }

    if(!values.Password){
        errors.Password = "Password is required"
    }
    else if(values.Password.length <8){
        errors.Password ="Password need to be 8 Char. or more";
    }

    if(!values.Password2){
        errors.Password2 = "Password is required"
    }
    else if(values.Password != values.Password2){
        errors.Password2 = "Password don't match"
    }
    return errors;
}