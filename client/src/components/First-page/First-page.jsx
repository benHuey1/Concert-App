import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import Axios from "axios";
import Login from "../Login-signup/Login";
import "../Navbar/Navbar.css"
import axios from "axios";

export default function FirstPage() {
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
            <img src="/logo-site.svg" alt=""/>
            <Link to={"/home"} >Go Home</Link>
        </>
    );
}
