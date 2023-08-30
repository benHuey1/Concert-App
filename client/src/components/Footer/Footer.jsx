import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css"

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
        <footer>
            <div className="footer_infos">
                <h2><img src="/logo-site.png" alt="" /></h2>
                {/* <img id="logo_site" src="/logo-site.svg" alt=""/> */}
                <div className="infos">
                    <span><img src="/map.svg" alt="map-picture" /> Square des Martyrs, 6000 Charleroi</span>
                    <span><img src="/phone.svg" alt="phone-picture" /> (123) 456-7890</span>
                    <span><img src="/mail.svg" alt="mail-picture" /> vibz.info@vibz-contact.com</span>
                </div>
            </div>
            <div className="footer_nav_copy">
                <nav className="footer_navbar">
                    <NavLink  to="/" className={"nav_link"}>Home</NavLink>
                    <NavLink  to="/contact" className={"nav_link"}>Contact</NavLink>
                    <NavLink  to="/my-account" className={"nav_link"}>My Account</NavLink>
                </nav>
                <span className="copyright">Copyright © 2023 • VIBZ Inc</span>
            </div>
        </footer>
        </>
    )
}