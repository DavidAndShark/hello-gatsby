import React from "react"
import Header from "../components/header"

export default function MyRandomPic() {
  return (
    <div style={{ color: "orange", fontFamily: "sans-serif" }}>
      <Header headerText="Look, it's a random picture!"/>
      <img src="https://picsum.photos/500/700"/>
    </div>
  )
}