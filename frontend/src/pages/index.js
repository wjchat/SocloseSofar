import React from "react"
import '../styles/index.scss'
import Layout from "../components/layout"
import Landing from "../components/landing.jsx"
import Submission from "../components/submission.jsx"
import { useState } from 'react';

const Index = () => {

  const [count, setCount] = useState(0);

  return (
      <div className="bg">
        <Layout>
          <Landing
            count={count}
          />
          <Submission
            setCount={setCount}
            count={count}
          />
        </Layout>
      </div>
  )
}

export default Index
