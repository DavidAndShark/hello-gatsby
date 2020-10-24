import React from "react"
import { graphql } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"

export default function Home({ data }) {
  return (
    <Layout>
      <Header headerText={data.site.siteMetadata.title}/>
      Hello, friend.
    </Layout>
  )
}

export const query = graphql`
  query myQuery{
    site {
      siteMetadata {
        title
      }
    }
  }
`