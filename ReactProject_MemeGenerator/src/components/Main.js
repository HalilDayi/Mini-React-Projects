import React from "react"

export default function Main(){
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/1bij.jpg"
    })
    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        async function getMemes(){
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    }, [])

    function getMemeImage(){
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({...prevMeme, randomImage: url}))
    }

    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevMeme => {
            return {...prevMeme, [name]: value}
        })
    }
    return(
        <div className="return--container">
        <form className="main--form">
            <label className="grid-item-f" htmlFor="topText">Top text</label>
            <input type="text" id="topText" name="topText" value={meme.topText} placeholder="Shut up" onChange={handleChange}/>
            <label className="grid-item-s" htmlFor="bottomText">Bottom text</label>
            <input type="text" id="bottomText" name="bottomText" value={meme.bottomText} placeholder="And take my money" onChange={handleChange}/>
            <button type="button" onClick={getMemeImage}>Get a new meme image</button>
        </form>
        <div className="meme">
            <img src={meme.randomImage} className="meme--image"/>
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom" value={meme.bottomText}>{meme.bottomText} </h2>
        </div>
    </div> 
    )
}