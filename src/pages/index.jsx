import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <Link to="/contact">Contact Me </Link>
      <Link to="/my-random-pic"> Get a pic!</Link>
      <Header headerText="Well hello there!"/>
      Hello, friend.
    </Layout>
  )
}
