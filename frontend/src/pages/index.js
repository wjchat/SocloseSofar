import React from "react"
import "../styles/index.scss"
import Layout from "../components/layout"
import Landing from "../components/landing.jsx"
import Submission from "../components/submission.jsx"
import { useState, useEffect } from "react"
import axios from "axios"

const Index = () => {
  const [count, setCount] = useState(null)
  useEffect(() => {
    axios
    .get("http://localhost:1337/people-contents/count")
    .then(response => {
      setCount(response.data)
    })
    setInterval(() => {
      axios
        .get("http://localhost:1337/people-contents/count")
        .then(response => {
          setCount(response.data)
        })
    }, 3000)
  }, [])

  return (
    <div className="gb">
      <div className="bg">
        <Layout>
          <Landing count={count} />
          <Submission setCount={setCount} count={count} />
        </Layout>
      </div>
    </div>
  )
}

export default Index
