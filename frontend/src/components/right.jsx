import React from "react"
import '../styles/right.css'

export default ({ children }) => {
  //lineOne is invisible right now, peep CSS for the deets
  return (
    <div className="rightContainer">
      <p className="blurb"> In a time of unprecedented devastation and uncertainity, everybody has a story.<br/><br/> Matte Projects believes your experience needs to be heard.<br/>We invite you to help us tell the story of the world.
      </p>
      <div className="lineOne"></div>
      <h1 className="counter">641</h1> 
      <p className="counterCaption">stories told</p> 
      <div className="lineTwo"></div>
    </div>
)
}