import React from "react"
import StarImg from "../images/little-star.png"

export default function Card(props){
    let activityInfo
    if(props.availableCapac === 0)
        activityInfo = "SOLD OUT"
    else if(props.isOnline === true)
        activityInfo = "ONLINE"
    return(
        <div className="card">
            <div className="card--img--container">
            {activityInfo && <div className="activity--info">{activityInfo}</div>}
            <img src={props.img} className="card--img"/>               
            </div>
            <div className="card--star--info">
                <img src={StarImg}/>
                <p>{props.stats.star} <span style={{color: "#918E9B"}}>({props.stats.view}) - {props.location}</span></p>
            </div>
            <p>{props.cardInfo}</p>
            <p><b>FROM ${props.price}</b> / person</p>
        </div>
    )
}