import React from "react"

export default function Footer() {
  return (
    <footer style={{textAlign: "right"}}>
      <small>&copy; {new Date().getFullYear()} David Stinson</small>
    </footer>
  )
}