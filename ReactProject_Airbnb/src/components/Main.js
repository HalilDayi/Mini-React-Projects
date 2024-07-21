import React from "react"
import PhotoGrid from "../images/photo-grid.png"

export default function Main(){
    return(
        <div className="main">
            <img src={PhotoGrid} className="main--photo"/>
            <h1 className="main--title">ONLINE EXPERIENCES</h1>
            <p className="main--parag">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    )
}