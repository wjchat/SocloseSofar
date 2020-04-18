import React from "react"
import Video from "../components/video.jsx"
import Left from "../components/left.jsx"
import Right from "../components/right.jsx"
import Arrow from "../../public/assets/Arrow.svg";
import Matte from "../../public/assets/Matte.svg";
import '../styles/landing.scss'

export default (props) => {

  const handleClick = () => {
    window.scrollTo({top: window.innerHeight, left:0, behavior:"smooth"});
  }

  return (
    <div className = 'landingBack'>;
      <div className="landingContainer">
        <div className="logoContainer">
          <a href="http://www.matteprojects.com" target="_blank">
            <Matte className="logo"/>
          </a>
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
          <Arrow className="arrow" onClick={handleClick}/> 
          <p className = 'bottomText'>tell your story</p>
        </div>
      </div>

      <div className="landingContainerMobile">
        <div className="logoContainerMobile">
          <a href="http://www.matteprojects.com" target="_blank" className="logoMobile">
            <Matte/>
          </a>
        </div>
        <div className="flexboxMobile">
          <div className = 'videoMobile'>
            <Video />
          </div>
          <div className = 'leftMobile'>
            <Left />
          </div>
          <div className = 'rightMobile'>
            <Right 
              count={props.count}
            />
          </div>
        </div>
        <div className = 'bottomContainerMobile'></div>
      </div>

    </div>
)
}