import { React, useState } from "react";

import LoginForm from "../Components/LoginForm";
import RegistrationForm from "../Components/RegistrationForm";

import Binding from "../images/Binding.png";
import Flowers from "../images/Flowers.png";
import User from "../images/user.png";

const LoginSignUp = ({regValues, loginValues, setLoginValues, setRegValues, errors, setErrors,handleLoginChange, handleLoginSubmit, handleRegChange, handleRegSubmit }) => {
    //is Sign Up Clicked
    const [isSignUpClicked, setIsSignUpClicked] = useState(false);

    const handleSignUpClick = () => {
        if (isSignUpClicked === true){
            setIsSignUpClicked(false);
        }
        else{
            setIsSignUpClicked(true);
        }
    };

//_____________________________________________________________________________________________________________________________________________________

    return(
    <div>
        <div className="Box" style={{display: "flex"}}>


          <div className="FileDecor">
            <svg width="100px" height="400px" xmlns="http://www.w3.org/2000/svg">
                <image href={Binding} height="400px" width="100px" />
            </svg>
            <svg width="100px" height="395px" xmlns="http://www.w3.org/2000/svg">
                <image href={Binding} height="400px" width="100px" />
            </svg>
            <svg width="100px" height="190px" xmlns="http://www.w3.org/2000/svg">
                <image href={Binding} height="400px" width="100px" />
            </svg>
          </div>


          <div className="FloralDecor">
            <svg width="300px" height="690px" xmlns="http://www.w3.org/2000/svg">
                <image href={Flowers} height="680px" width="300px" />
            </svg>
            <svg width="300px" height="300px" xmlns="http://www.w3.org/2000/svg">
                <image href={Flowers} height="680px" width="300px" />
            </svg>
          </div>


          <div className="Content">
            <div className="Home">
                <div className="Text">
                    <div className="AppName"><h1>...TOODALOO...</h1></div>
                </div>

                <div className="LoginRegistration">
                    <div style={{marginTop:"100px", marginLeft: "150px"}}>
                        <svg width="100px" height="100px" xmlns="http://www.w3.org/2000/svg">
                            <image href={User} height="90px" width="100px" />
                        </svg>
                    </div>

                    {
                        isSignUpClicked ?
                        <>
                            <RegistrationForm
                                            regValues={regValues}
                                            setRegValues={setRegValues}
                                            handleRegChange={handleRegChange}
                                            handleRegSubmit={handleRegSubmit}
                                            errors={errors}
                                            setErrors={setErrors} />
                        </>
                        :
                        <>
                            <LoginForm
                                            loginValues={loginValues}
                                            setLoginValues={setLoginValues}
                                            handleLoginChange={handleLoginChange}
                                            handleLoginSubmit={handleLoginSubmit} />

                            <div style={{display:"flex", marginLeft:"300px"}}>
                                <h4>Don't Have any Account?</h4>
                                <button
                                    className="SignUpLink"
                                    type="button"
                                    onClick={() => handleSignUpClick(!isSignUpClicked)}
                                >Sign Up
                                </button>
                            </div>
                        </>
                    }
            
                </div>
            
            </div>

        </div>
    </div>
</div>
    )
};

export default LoginSignUp;