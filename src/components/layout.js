import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

const Layout = ({ location, title, children }) => {
 
  return (
    <div>
      <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: "100%",
        marginBottom: "4rem",
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}>
        <main
        className="contentWrapper"
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(30),
          minHeight: "85vh",
          marginTop: "3rem",
        }}>{children}</main>
        
      </div>
    </div>
  )
}

export default Layout
