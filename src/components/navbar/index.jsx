import React from "react"
import { Link } from "gatsby"

export default function NavBar() {
  return (
    <nav>
      <Link to="/" style={{ display: `inline-block`, marginRight: `1rem` }}>Go home!</Link>
      <Link to="/contact" style={{ display: `inline-block`, marginRight: `1rem` }}>Contact Me</Link>
      <Link to="/my-random-pic">Get a pic!</Link>
    </nav>
  )
}