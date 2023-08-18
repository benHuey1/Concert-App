import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { NavLink, Outlet } from "react-router-dom";
import Axios from "axios";
import Login from "../Login-signup/Login";
import "../Navbar/Navbar.css"

export default function Home() {
    const styleLink =({ isActive }) => {
        return { 
            color: isActive ? '#000' : '#fff',
            height: '0px'
        }
    };
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
            <Outlet />
            {/* <Login /> */}
        {/* <h1>Hello World</h1>
    <label name="colonne-1">Colonne 1 (name): </label>
    <input
        type="text"
        name="colonne-1"
        onChange={(e) => {
            setColonne_1(e.target.value);
        }}
    ></input>
    <label name="colonne-2">Colonne 2 (password): </label>
    <input
        type="text"
        name="colonne-2"
        onChange={(e) => {
            setColonne_2(e.target.value);
        }}
    ></input>
    <button type="submit" onClick={submitColonne}>
        Submit
    </button>
    <div> */}
        {/* {colonne1_2list.map((val) => {
            return (
                <>
                    <h2>
                       ok
                    </h2>
                    <button>Update</button>
                    <input type="text"></input>
                    <button
                        onClick={() => {
                            deleteColonne(val.colonne_1);
                        }}
                    >
                        Delete
                    </button>
                </>
            );
        })} */}

    {/* </div> */}
        </>
    );
}
