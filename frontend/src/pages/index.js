import React from "react"
import "../styles/index.scss"
import Layout from "../components/layout"
import Video from "../components/video.jsx"
import Left from "../components/left.jsx"
import Right from "../components/right.jsx"
import Arrow from "../../public/assets/Arrow.svg"
import Upload from "../components/upload.jsx"

// import { useState } from 'react';

const Index = () => {
  // const [storyCount, setStoryCount] = useState(0)

  return (
    <Layout>
      <div className="bg">
        <div className="logoContainer">
          <h1 className="logo"> MATTE </h1>
        </div>
        <div className="flexbox">
          <div>
            <Left />
          </div>
          <div>
            <Video />
          </div>
          <div>
            <Right />
          </div>
        </div>
        <div className = 'bottomContainer'>
          <Arrow className="arrow" fill="white" /> {/* <Upload /> */}
          <p className = 'bottomText'>tell your story</p>
        </div>
      </div>
    </Layout>
  )
}

export default Index
