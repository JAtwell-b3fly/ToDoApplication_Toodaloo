import React from "react";
import { Link } from "react-router-dom";

import Home from "../images/house.png";
import List from "../images/list.png";

const Navbar = () => {
    return(
        <nav style={{marginTop:"50px", marginLeft:"1200px"}}>
            <Link to="/">
                <svg width="50px" height="50px" xmlns="http://www.w3.org/2000/svg">
                    <image href={Home} height="50px" width="50px" />
                </svg>
            </Link>

            <Link to="/login/todolist">
                <svg width="50px" height="50px" xmlns="http://www.w3.org/2000/svg">
                    <image href={List} height="50px" width="50px" />
                </svg>
            </Link>
        </nav>
    )
};

export default Navbar;