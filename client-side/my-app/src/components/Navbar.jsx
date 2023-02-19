import React from "react";
import { Link } from "react-router-dom";
import Logo from "../asserts/logo.jpeg";


const Navbar = () => {
    return(
        <div className="navbar">
        <div className="container">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
        <div className="links">
        <Link className="link" to="/?cat=art">
            <h6>ART</h6>
            </Link>
            <Link className="link" to="/?cat=art">
            <h6>SCIENCE</h6>
            </Link>
            <Link className="link" to="/?cat=art">
            <h6>TECHNOLOGY</h6>
            </Link>
            <Link className="link" to="/?cat=art">
            <h6>CINEMA</h6>
            </Link>
            <Link className="link" to="/?cat=art">
            <h6>DESIGN</h6>
            </Link>
            <Link className="link" to="/?cat=art">
            <h6>FOOD</h6>
            </Link>
        </div>
        </div>
        </div>
    );
};

export default Navbar;
