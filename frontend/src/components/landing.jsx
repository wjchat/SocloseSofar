import React from "react"
import Video from "../components/video.jsx"
import Left from "../components/left.jsx"
import Right from "../components/right.jsx"
import Arrow from "../../public/assets/Arrow.svg";
import Matte from "../../public/assets/Matte.svg";
import '../styles/landing.scss'

export default (props) => {

  const handleClick = () => {
    window.scrollTo({top:1000, left:0, behavior:"smooth"});
  }

  return (
    <div className="landingContainer">
      <div className="logoContainer">
        <Matte className="logo"/>
      </div>
      <div className="flexbox">
        <div className = 'left'>
          <Left />
        </div>
        <div className = 'video'>
          <Video />
        </div>
        <div className = 'right'>
          <Right 
            count={props.count}
          />
        </div>
      </div>
      <div className = 'bottomContainer'>
        <Arrow className="arrow" fill="white" onClick={handleClick}/> 
        <p className = 'bottomText'>tell your story</p>
      </div>
    </div>
)
}