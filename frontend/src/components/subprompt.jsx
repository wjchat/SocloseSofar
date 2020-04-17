import React from "react"
import '../styles/subprompt.scss'

export default ({ children }) => {
  return (
    <div className="subpromptContainer">

      <div className="firstSub">
        <h1 className="title">
          We Want
          <br/>
          To Hear
          <br/> 
          {`Your `} 
          <span className = 'break'>
          <br/>
          </span>
          Voice
        </h1>
        <div className="line"></div>
      </div>


      <div className="secondSub">
        <p className="blurbOne">
          Show us what you see
          <br/>
          and tell us how you feel.
        </p>
        <p className="blurbTwo">
          We’ll be taking the videos
          <br/>
          submitted to create a living audio
          <br/>
          visual patchwork for and by all of us
          <br/>
          <br/>
        </p>
      </div>

    </div>
)
}