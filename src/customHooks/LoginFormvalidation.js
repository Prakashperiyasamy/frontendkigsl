export default function validate(values) {
    let errors = {};
    if (!values.email) {
        errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }

    if (!values.password) {
        errors.password = 'password is required';
    } else if (values.password.length < 8) {
        errors.password = 'password should be more than 8 charcter';
    }
    if (!values.phonenumber) {
        errors.phonenumber = 'phonenumber is required';
    }else if(isNaN(values.phonenumber))
    {
        errors.phonenumber = 'phonenumber should be numeric only';
    }
    if (!values.location) {
        errors.location = 'location is required';
    }
    if (!values.username) {
        errors.username = 'username is required';
    }
    return errors;
}