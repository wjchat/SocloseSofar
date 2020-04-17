import React from "react"
import "../styles/left.scss"

export default ({ children }) => {
  return (
    <div className="leftContainer">
        <h1 className = "titleBright small">
            So Close <br/>So Far
        </h1>
      <h1 className="titleBright">
        So
        <br />
        Close
        <br />
        So
        <br />
        Far
      </h1>
      <h1 className="titleDark">
        So
        <br />
        Far
        <br />
        So
        <br />
        Close
      </h1>
    </div>
  )
}