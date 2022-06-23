import React, {useState} from "react"
import emoji from "../images/emoji.png"
import memesData from "../memesData"

export default function Meme() {
    const [memeImage, setMemeImage] = useState({
        topText: "",
        bottomText: "",
        imageUrl:"https://i.imgflip.com/30b1gx.jpg"
    })
    
    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
 
        setMemeImage(prevMeme => ({
            ...prevMeme,
            imageUrl: url
        }))
    }

    return (
        <>
            <div className="form">
                <input type = "text" placeholder="Enter first Word" className="form--input" />
                <input type = "text" placeholder="Enter second Word" className="form--input" />
                <div className="break"></div>
                <button onClick={getMemeImage} 
                    className="form--button">Get a new meme image <img src = {emoji} alt = "emoji" className="emoji--logo"/> </button>
            </div>
            <img className="form--image" alt="meme" src = {memeImage.imageUrl} />
            <div>{memeImage.topText}</div>
            <div>{memeImage.bottomText}</div>
        </>
    )
}

