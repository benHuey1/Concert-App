import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"

export default function Navbar() {
    
    // const classStyleLink =({ isActive }) => {
         
    //         // color: isActive ? '#a44bbd' : (isHover ? 'red' : '#fff'),
    //         // height: '0px'
    //         ["nav_link", isActive ? "nav_link_active" : null]
    //         .filter(Boolean)
    //         .join(" ")
    // };

    return (
        <>
        <nav className="navbar">
            <NavLink  to="/home"><img id="logo_site" src="/logo-site.svg" alt=""/></NavLink>
            <NavLink  to="/home" className={"nav_link"}>Home</NavLink>
            <NavLink  to="/contact" className={"nav_link"}>Contact</NavLink>
            <NavLink  to="/my-account" className={"nav_link"}>My Account</NavLink>
            <NavLink  to="/login" className={"nav_link"}>Login</NavLink>
            <NavLink  to="/" className={"nav_link"}>Logout</NavLink>
        </nav>
        </>
    )
}