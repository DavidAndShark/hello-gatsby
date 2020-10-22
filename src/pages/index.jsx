import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Home() {
  return (
    <div style={{ color: "purple", fontFamily: "sans-serif", margin: `3rem auto`, maxWidth: 600 }}>
      <Link to="/contact">Contact Me </Link>
      <Link to="/my-random-pic"> Get a pic!</Link>
      <Header headerText="Well hello there!"/>
      Hello, friend.
    </div>
  )
}
