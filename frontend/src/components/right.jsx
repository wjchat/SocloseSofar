import React from "react"
import "../styles/right.scss"

export default (props) => {
  return (
    <div className="rightContainer">
      <div className = 'first'>
        <p className="blurb">
          In a time of unprecedented devastation and uncertainity, everybody has
          a story.
          <br />
          <br /> Matte Projects believes your experience needs to be heard.
          <br />
          <br/>
          We invite you to help us tell the story of the world.
        </p>
        <p className="blurbMobile">
          In a time of unprecedented devastation and uncertainity, everybody has
          a story. Matte Projects believes your experience needs to be heard.
          We invite you to help us tell the story of the world.
        </p>
      </div>

      <div className = 'second'>
        <div className="lineOne"></div>
      </div>

      <div className = 'third'>
        <h1 className="counter">{props.count}</h1>
        <p className="counterCaption">stories told</p>
        <div className="lineTwo"></div>
      </div>
    </div>
  )
}