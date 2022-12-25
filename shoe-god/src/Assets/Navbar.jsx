import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"
import logo_2 from "./logo_2.png"
const Navbar = () => {
  return (
    <div>
      <header>
        <nav>
            <ul>
                <Link to ="/" className="logo">
                    <img src={logo_2} className="logo-img"/>
                </Link>
                <Link to ="/shoes"className="nav-link">SHOES</Link>
                <Link to ="/shirts" className="nav-link">SHIRTS</Link>
                <Link to ="/About" className="nav-link">ABOUT US</Link>
                <Link to ="/contact" className="nav-link">CONTACT US</Link>
                <button className="login-btn">SIGN-IN</button>
                <button className="signup-btn">SIGN-UP</button>
            </ul>
        </nav>
      </header>
      <hr></hr>
    </div>
  );
};

export default Navbar;
