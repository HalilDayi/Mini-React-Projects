import React from "react"
import Logo from "../images/Troll Face.png"
export default function Header(){
    return(
        <div className="header">
            <img src={Logo} className="logo"/>
            <h2 className="header--title">Meme Generator</h2>
            <p className="header--text">React Course - Project 3</p>
        </div>
    )
}