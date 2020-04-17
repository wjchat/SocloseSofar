import React from "react"
import Upload from "../components/upload.jsx"
import Subprompt from "../components/subprompt.jsx"
import '../styles/submission.scss'

export default (props) => {
  return (
    <div className="submissionContainer"> 
      <div className="topContain"></div>

      <div className="flexSub">
        <Subprompt/>
        <Upload
          count={props.count}
          setCount={props.setCount}
        />
      </div>

      <div className="bottomContain"></div>
    </div>
)
}
