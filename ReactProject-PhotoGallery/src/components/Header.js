import React from "react";
import "../style.css";
import Logo from "../images/logo.jpg";

export default function Header(){
    return(
        <div className="header">
            <img src={Logo} alt="logo"/>
        </div>
    )
}