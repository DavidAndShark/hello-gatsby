import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function Post({ data }) {
  return (
    <Layout>
      <div 
        dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        style={{marginTop:"2rem"}}
      />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
    }
  }
`