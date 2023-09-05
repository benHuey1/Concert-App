import { NavLink, Outlet } from "react-router-dom";
import "../Navbar/Navbar.css"
import axios from "axios";
import "./Home.css"
import "../../App.scss"

export default function Home() {

    const styleLink =({ isActive }) => {
        return { 
            color: isActive ? '#000' : '#fff',
            height: '0px'
        }
    };

    return (
        <>
            <nav className="navbar_home">
                <NavLink to="/home/concerts" style={styleLink}>Concerts</NavLink>
                <NavLink to="/home/artists" style={styleLink}>Artists</NavLink>
                <NavLink to="/home/concert-halls" style={styleLink}>Concert Halls</NavLink>
            </nav>
            <Outlet />
            {/* <h2>Welcome, {name} !</h2> */}
        </>
    );
}
