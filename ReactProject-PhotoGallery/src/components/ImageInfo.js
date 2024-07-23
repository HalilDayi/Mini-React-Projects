import React from "react"

export default function ImageInfo(props){
    const [obj, setObj] = React.useState(props.info)
    const li = obj.list.map((item) => {
        return <p key={2 * obj.id}>{item}</p>
    })

    return(
        <div className="image--info">
            <h2>{props.info.name}</h2>
            {props.info.latinName && <h3>{props.info.latinName}</h3>}
            {li}
        </div>
    )
}