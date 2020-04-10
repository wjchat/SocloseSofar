import React from "react"
import '../styles/left.css'

export default ({ children }) => {
  return (
    <div className="leftContainer">
      <h1 className="titleBright">So Close<br/>So Far</h1>
      <h1 className="titleDark">So Far<br/>So Close</h1>
    </div>
)
}