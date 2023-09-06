import { React, useContext, useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Modal from "../Modal/Modal";
import { ConcertContext } from "../Modal/concert-context";
import ButtonSTD from "../Button/Button-std";
import ButtonSubmit from "../Button/Button-Submit";

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
    // const navigate = useNavigate();
    const { concertCart } = useContext(ConcertContext);
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

    // const location = useLocation();
    // const concert = location.state?.concert;
    const handleDelete = (e) => {
        const cartId = e.target.id;
        console.log(cartId);
        const ID = cartId.split('-').pop();
        console.log(`cart-${ID}`);
        const cartToRemove = document.getElementById(`cart-${ID}`);
        cartToRemove.remove();
    }

    return (
        <>
        <nav className="navbar">
            <NavLink  to="/"><img id="logo-site" src="/logo-site.svg" alt=""/></NavLink>
            <NavLink  to="/" className={"navbar__link"}>Home</NavLink>
            <NavLink  to="/contact" className={"navbar__link"}>Contact</NavLink>
            <NavLink  to="/my-account" className={"navbar__link"}>My Account</NavLink>
            {isLoggedIn ? null : (
                <NavLink to="/login" className={"navbar__link"}>Login</NavLink>
             )}
            {isLoggedIn ? (
                <NavLink to="/" className={"navbar__link"} onClick={handleLogout}>Logout</NavLink>
            ) : null}
            
                <Modal content={concertCart.length > 0 && (
                    <>
                    <h2>Your Cart 🎵</h2>
                        {concertCart.map((concert) => (
                            <div key={concert.id} id={`cart-${concert.id}`} className="modal__content__item">
                                <div>{concert.artist}</div>
                                <div>{concert.city}</div>
                                <div>{concert.date}</div>
                                <div>{concert.ticket_cost}€</div>
                                <ButtonSubmit id={`delete-${concert.id}`} content="Delete" onclick={handleDelete}/>
                            </div>
                        ))}
                    </>
                )}/>
        </nav>
        </>
    )
}