import React from "react"
import Image from "../images/react-icon-small.png"
export default function Navbar(){
    return(
        <nav className="navbar">
            <img src={Image} className="nav--icon"/>
            <h3 className="nav--logo_text">React Facts</h3>
            <h4 className="nav--title">React Course - Project 1</h4>
        </nav>        
    )
}