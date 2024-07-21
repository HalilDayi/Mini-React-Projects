import React from "react"
import Card from "../components/Card"
import data from "../data"
export default function Cards(){
    const cards = data.map(card => {
        return <Card key={card.id} {...card}/>
    })
    return(
        <div className="cards">
            {cards}
        </div>
    )
}