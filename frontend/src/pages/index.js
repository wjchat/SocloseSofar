import React from "react"
import '../styles/index.css'
import Layout from "../components/layout"
import Video from "../components/video.jsx"
import Left from "../components/left.jsx"
import Right from "../components/right.jsx"
import Arrow from "../../public/assets/Arrow.svg";
import Upload from "../components/upload.jsx"

// import { useState } from 'react';

const Index = () => {

  // const [storyCount, setStoryCount] = useState(0)

  return (
      <div className="bg">
        <Layout>
          <div className="logoContainer">
            <h1 className="logo">MATTE</h1>
          </div>
          <Video/>
          <Left/>
          <Right/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <Arrow className="arrow" fill="white"/>
          {/* <Upload /> */}
        </Layout>
      </div>
  )
}

export default Index
