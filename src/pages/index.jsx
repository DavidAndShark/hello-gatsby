import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <Header headerText="Well hello there!"/>
      Hello, friend.
    </Layout>
  )
}
