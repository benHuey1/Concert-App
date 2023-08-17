import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/home">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/my-account">My Account</Link>
        </nav>
    )
}