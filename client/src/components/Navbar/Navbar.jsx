import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"

export default function Navbar() {
const styleLink =({ isActive }) => {
    return { 
        color: isActive ? '#a44bbd' : 'white',
        height: '0px'
    }
};

    return (
        <>
        <nav className="navbar">
            <NavLink  to="/home"><img id="logo_site" src="../../../public/logo-site2.svg" alt=""/></NavLink>
            <NavLink  to="/home" style={styleLink}>Home</NavLink>
            <NavLink  to="/contact" style={styleLink}>Contact</NavLink>
            <NavLink  to="/my-account" style={styleLink}>My Account</NavLink>
            <NavLink  to="/my-account" style={styleLink}>Logout</NavLink>
        </nav>
        </>
    )
}