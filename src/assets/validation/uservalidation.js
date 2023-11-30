export const validationUsersData = (values)=>{
    let errors = {};
    if(values.name.trim() ==''){
        errors.name = "User name is required";
    }
    else if(values.name.length < 3){
        errors.name = "User name must be at least 3 characters";
    }
    

    if(values.email.trim() ==''){
        errors.email = "User email is required";
    }
    else if(values.email.length < 9){
        errors.email = "User email must be at least 9 characters";
    }
    

    if(values.password.trim() ==''){
        errors.password = "User password is required";
    }
    else if(values.password.length < 5){
        errors.password = "User password must be at least 5 characters";
    }

    return errors;
}