import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";


const RegistrationForm = ({regValues, setRegValues, errors, setErrors, handleRegChange, handleRegSubmit }) => {
    
    //function to display an error based on whether there are form inputs that are not filled in or filled in incorrectly
  useEffect(() => {
    if(Object.keys(errors).length === 0 && regValues.username !== "" && regValues.password !== "" && regValues.emailAddress !== "" && regValues.gender !== "") {
          alert("Form Submitted");
      }
    }, [errors, regValues.emailAddress, regValues.gender, regValues.password, regValues.username])
    
    return(
        <div className="LoginForm">
            <form onSubmit={handleRegSubmit}>
                
                <div>
                    <input
                        name="username"
                        type="text"
                        placeholder="Full Name"
                        value={regValues.username}
                        onChange={handleRegChange}
                        required
                        maxLength={30}
                        className="RegForm"
                        style={{marginBottom:"50px"}}
                    />
                    {errors.username && <p style={{color:"red", fontSize:"13px"}}>{errors.username}</p>}
                </div>

                <div>
                    <label style={{fontSize:"larger"}}>Gender</label>
                    <select
                        name="gender"
                        defaultValue="Male"
                        onChange={handleRegChange}
                        className="GenderRegForm"
                        style={{marginBottom:"50px", marginLeft:"30px"}}
                    >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>

                <div>
                    <input
                        name="emailAddress"
                        type="email"
                        placeholder="Email Address"
                        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                        value={regValues.emailAddress}
                        onChange={handleRegChange}
                        required
                        className="RegForm"
                        style={{marginBottom:"50px"}}
                    />
                </div>

                <div>
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={regValues.password}
                        onChange={handleRegChange}
                        required
                        minLength={6}
                        className="RegForm"
                        style={{marginBottom:"50px"}}
                    />
                    {errors.password && <p style={{color:"red", fontSize:"13px"}}>{errors.password}</p>}
                </div>

                <div>
                    <nav>
                        <Link to="/login">
                            <button
                                className="SignUpButton"
                                type="submit"
                                style={{marginLeft:"120px"}}
                                >Sign Up
                            </button> 
                        </Link>
                    </nav>

                </div>
                
            </form>
        </div>
    )
};

export default RegistrationForm;