import React from "react"
import '../styles/index.css'
import Layout from "../components/layout"
import Landing from "../components/landing.jsx"
import Submission from "../components/submission.jsx"

const Index = () => {

  return (
      <div className="bg">
        <Layout>
          <Landing/>
          <Submission/>
        </Layout>
      </div>
  )
}

export default Index
