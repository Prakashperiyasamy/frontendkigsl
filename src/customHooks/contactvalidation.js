export default function validate(values) {
    let errors = {};
  

    if (!values.number) {
        errors.number = 'phonenumber is required';
    }else if(isNaN(values.number))
    {
        errors.number = 'phonenumber should be numeric only';
    }else if (values.number.length < 8) {
        errors.number = 'password should be more than 8 charcter';
    }
    if (!values.location) {
        errors.location = 'location is required';
    }
    if (!values.name) {
        errors.name = 'username is required';
    }
    return errors;
}