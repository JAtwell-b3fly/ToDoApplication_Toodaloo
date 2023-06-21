import React from "react";

const Validation = (regValues) => {
    //empty object of errors
    let errors = {};

    //Error if the username is not specified
    if (!regValues.username) {
        errors.username = "Username Required"
    }
    else if (regValues.username.length < 5) {
        errors.username = "Username must be more than 5 char"
    }

    //Error if the password is not specified
    if (!regValues.password) {
        errors.password = "Password Required"
    }
    else if (regValues.password.length < 6) {
        errors.password = "Password must be more than 6 char"
    }

    //Error if the email is not specified
    if (!regValues.emailAddress) {
        errors.emailAddress = "Email Address Required"
    }
    else if (regValues.emailAddress < 10) {
        errors.emailAddress = "Email Address must include @'org/gmail'.'com/za/co'"
    }

    return errors;
};

export default Validation;