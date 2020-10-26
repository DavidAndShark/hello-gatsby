import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header"

const MyPosts = ({ data }) => {
  return (
    <Layout>
      <Header headerText="My Pages" />
      <table>
        <thead>
          <tr>
            <th>Relative Path</th>
            <th>Size</th>
            <th>Last Changed</th>
          </tr>
        </thead>
        <tbody>
          {data.allFile.edges.map(({ node }, index) => (
            <tr key={index}>
              <td>{node.relativePath}</td>
              <td>{node.prettySize}</td>
              <td>{node.changeTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  )
}

export const query = graphql`
  {
    allFile(sort: {fields: changeTime, order: DESC}) {
      edges {
        node {
          relativePath
          prettySize
          changeTime(formatString: "ddd, MMM Do YYYY, h:mm:ssa z")
        }
      }
    }
  }
`

export default MyPosts

