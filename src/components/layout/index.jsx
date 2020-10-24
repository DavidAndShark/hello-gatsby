import React from "react"
import NavBar from "../navbar"
import styles from "./layout.module.css"
import Footer from "../footer"

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <NavBar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}