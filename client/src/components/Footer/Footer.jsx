import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import "../../App.scss"

export default function Footer() {
    
    // const classStyleLink =({ isActive }) => {
         
    //         // color: isActive ? '#a44bbd' : (isHover ? 'red' : '#fff'),
    //         // height: '0px'
    //         ["nav_link", isActive ? "nav_link_active" : null]
    //         .filter(Boolean)
    //         .join(" ")
    // };

    return (
        <>
        <footer className="footer">
            <div className="footer__infos">
                <h2><img src="/logo-site.png" alt="" /></h2>
                {/* <img id="logo_site" src="/logo-site.svg" alt=""/> */}
                <div className="footer__infos__content">
                    <span><img src="/map.svg" alt="map-picture" /> Square des Martyrs, 6000 Charleroi</span>
                    <span><img src="/phone.svg" alt="phone-picture" /> (123) 456-7890</span>
                    <span><img src="/mail.svg" alt="mail-picture" /> vibz.info@vibz-contact.com</span>
                </div>
            </div>
            <div className="footer__navbar">
                <nav className="footer__navbar__content">
                    <NavLink  to="/" className={"nav_link"}>Home</NavLink>
                    <NavLink  to="/contact" className={"nav_link"}>Contact</NavLink>
                    <NavLink  to="/my-account" className={"nav_link"}>My Account</NavLink>
                </nav>
                <span className="footer__navbar__copyright">Copyright © 2023 • VIBZ Inc</span>
            </div>
        </footer>
        </>
    )
}