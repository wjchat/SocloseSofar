import React from "react"

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
      <video width="320" height="240" controls>
        <source src={videoSRC} type="video/mp4" />
        <source src={videoSRC} type="video/ogg" />
        Your browser does not support the video tag.
      </video>
  )
}
