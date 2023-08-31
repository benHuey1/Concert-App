import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Axios from "axios";
import Login from "../Login-signup/Login";
import "../Navbar/Navbar.css"
import axios from "axios";

export default function Home() {
    const [name, setName] = useState('')
    const navigate = useNavigate('')

    const styleLink =({ isActive }) => {
        return { 
            color: isActive ? '#000' : '#fff',
            height: '0px'
        }
    };
    axios.defaults.withCredentials = true;

    useEffect(()=>{
        axios.get("http://localhost:3001/home")
        .then( res => {
            if (res.data.valid) {
                setName(res.data.name)
            } else {
                setName(res.data.name)
            }
        })
        .catch( err => console.log(err))
    })
    return (
        <>
            <nav className="navbar_home">
                <NavLink to="/home/concerts" style={styleLink}>Concerts</NavLink>
                <NavLink to="/home/artists" style={styleLink}>Artists</NavLink>
                <NavLink to="/home/concert-halls" style={styleLink}>Concert Halls</NavLink>
            </nav>
            <h2>Welcome, {name} !</h2>
            <Outlet />

        </>
    );
}
