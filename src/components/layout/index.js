import React from "react"
import NavBar from "../navbar"

export default function Layout({ children }) {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
      <NavBar />
      {children}
    </div>
  )
}