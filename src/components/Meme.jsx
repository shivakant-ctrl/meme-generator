import React from "react"
import memesData from "../memesData.js"

function Meme() {
  const [allMemesData, setAllMemesData] = React.useState(memesData.data)
  const [meme, setMeme] = React.useState({topText: "", bottomText: "", image: "https://i.imgflip.com/1g8my4.jpg"})

  function getMemeImage() {
    const memesArray = allMemesData.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        image: url
      }
    })
  }

  console.log(meme.image)

  function handleChange(event) {
    const { name, value } = event.target
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value
      }
    })
  }

  return (
    <main>
      <div className="meme--div">
        <div className="meme--inputs">
          <input className="input--first" type="text" name="topText" value={meme.topText} onChange={handleChange} />
          <input className="input--second" type="text" name="bottomText" value={meme.bottomText} onChange={handleChange} />
        </div>
        <button className="meme--button" onClick={getMemeImage}>Get a new meme image</button>
      </div>
      <div className="output--meme">
        <img src={meme.image} className="meme--photo" />
        <h2 className="output--meme--top meme--text">{meme.topText}</h2>
        <h2 className="output--meme--bottom meme--text">{meme.bottomText}</h2>
      </div>
    </main>
  )
}

export default Meme