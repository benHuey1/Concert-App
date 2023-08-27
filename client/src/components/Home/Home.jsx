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

    // const isConnected = async () =>{
    //     try {
    //         const response = await axios.post("http://localhost:3001/login", {
    //             mail,
    //             password,
    //         });
    //         if (response.data.Login) {
    //             console.log(response.data);
    //             navigate('/home');
    //         } else {
    //             alert("No record");
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    // const [colonne_1, setColonne_1] = useState("");
    // const [colonne_2, setColonne_2] = useState("");
    // const [colonne1_2list, setColonne1_2list] = useState([]);

    // useEffect(() => {
    //     Axios.get("http://localhost:3001/api/get").then((response) => {
    //         console.log(response);
    //         setColonne1_2list(response.data);
    //     });
    // }, []); 

    // const submitColonne = () => {
    //     Axios.post("http://localhost:3001/api/insert", {
    //         colonne1: colonne_1,
    //         colonne2: colonne_2,
    //     });

    //     setColonne1_2list([
    //         ...colonne1_2list,
    //         {
    //             colonne1: colonne_1,
    //             colonne2: colonne_2,
    //         },
    //     ]);
    // };

    // const deleteColonne = (colonne) => {
    //     Axios.get(`http://localhost:3001/api/delete/${colonne}`);
    // };
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
