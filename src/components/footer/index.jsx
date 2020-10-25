import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default function Footer() {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            creator
          }
        }
      }
    `
  )
  return (
    <footer style={{textAlign: "right"}}>
      <p>
        <small>
          &copy; {new Date().getFullYear()} {data.site.siteMetadata.creator}
        </small>
      </p>
    </footer>
  )
}