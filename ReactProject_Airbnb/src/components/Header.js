import React from "react"
import Logo from "../images/airbnb-logo.png"

export default function Header(){
    return(
        <div className="header">
            <img src={Logo} className="header--logo"/>
        </div>
    )
}