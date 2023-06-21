import React from "react";
import { Link } from "react-router-dom";

const LoginForm = ({loginValues, setLoginValues, handleLoginChange, handleLoginSubmit}) => {
    
    return(
        <div className="LoginForm">
            <form onSubmit={handleLoginSubmit}>
                <div>
                    <input
                        name="username"
                        value={loginValues.username}
                        onChange={handleLoginChange}
                        placeholder="Username"
                        type="text"
                        className="LogForm"
                        style={{marginBottom:"50px"}}
                    />
                    
                </div>
                
                <input
                    name="password"
                    value={loginValues.passwordpassword}
                    onChange={handleLoginChange}
                    placeholder="Password"
                    type="password"
                    className="LogForm"
                    style={{marginBottom:"50px"}}
                />
                

                <div>
                    <input
                        type="checkbox"
                        name="Remember Me"
                        checked="checked"
                        style={{marginBottom:"30px"}}
                    /> Remember Me
                </div>

                <div>
                    <button
                        className="ForgotPasswordLink"
                        type="button"
                        style={{marginLeft:"300px"}}
                        >Forgot your password?</button>
                </div>

                <div style={{marginTop:"80px", marginLeft:"100px"}}>
                    <nav>
                        <Link to="/login/todolist">
                            <button
                                className="LoginButton"
                                type="submit"
                            >Login
                            </button>
                        </Link>
                    </nav>
                </div>
                
            </form>
        </div>
    )
};

export default LoginForm;