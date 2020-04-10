import React from "react"
import ReactPlayer from 'react-player'
import '../styles/video.css'

import { useStaticQuery, graphql } from "gatsby"

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        allStrapiMatteVideos {
          edges {
            node {
              date
              video {
                publicURL
              }
            }
          }
        }
      }
    `
  )
  const videoSRC = data.allStrapiMatteVideos.edges[0].node.video.publicURL
  return (
    <div className="vidContainer">
      <ReactPlayer 
        width="100%" 
        height="100%" 
        url={videoSRC}
        controls={true}
      />
    </div>
)
}
