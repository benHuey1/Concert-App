import { React, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css"
import axios from "axios";

export default function Navbar() {
    
    // const classStyleLink =({ isActive }) => {
         
    //         // color: isActive ? '#a44bbd' : (isHover ? 'red' : '#fff'),
    //         // height: '0px'
    //         ["nav_link", isActive ? "nav_link_active" : null]
    //         .filter(Boolean)
    //         .join(" ")
    // };
    axios.defaults.withCredentials = true;
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();
    useEffect(()=>{
        axios.get("http://localhost:3001/home")
        .then( res => {
            // console.log(res);
            if (res.data.valid) {
                // console.log(res.data.valid);
                setIsLoggedIn(true);
            } else {
                // console.log(res.data.valid);
                setIsLoggedIn(false);
            }
        })
        .catch( err => console.log(err))
    })

    const handleLogout = () => {
        axios.get("http://localhost:3001/logout")
            .then( res => {
                console.log(res.data.logout);
            })
                .catch(err => {
                    console.log(err);
                })
};


    return (
        <>
        <nav className="navbar">
            <NavLink  to="/"><img id="logo_site" src="/logo-site.svg" alt=""/></NavLink>
            <NavLink  to="/" className={"nav_link"}>Home</NavLink>
            <NavLink  to="/contact" className={"nav_link"}>Contact</NavLink>
            <NavLink  to="/my-account" className={"nav_link"}>My Account</NavLink>
            {isLoggedIn ? null : (
                <NavLink to="/login" className={"nav_link"}>Login</NavLink>
             )}
            {isLoggedIn ? (
                <NavLink to="/" className={"nav_link"} onClick={handleLogout}>Logout</NavLink>
            ) : null}
        </nav>
        </>
    )
}