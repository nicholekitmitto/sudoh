import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1),
          marginLeft: rhythm(1),
          marginTop: ".25em",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          <div class="titleWrapper">
            <p class="glitch">
              <span>S</span>
              <span>u</span>
              <span>d</span>
              <span>o</span>
              <span>h</span>
            </p>
            <p class="glitch_fixed">
              <span>S</span>
              <span>u</span>
              <span>d</span>
              <span>o</span>
              <span>h</span>
            </p>
            <p class="glitch_opacity">
              <span>S</span>
              <span>u</span>
              <span>d</span>
              <span>o</span>
              <span>h</span>
            </p>
          </div>
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          ...scale(1),
          marginLeft: rhythm(1),
          marginTop: ".25em",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          <div class="titleWrapper">
            <p class="glitch">
              <span>S</span>
              <span>u</span>
              <span>d</span>
              <span>o</span>
              <span>h</span>
            </p>
            <p class="glitch_fixed">
              <span>S</span>
              <span>u</span>
              <span>d</span>
              <span>o</span>
              <span>h</span>
            </p>
            <p class="glitch_opacity">
              <span>S</span>
              <span>u</span>
              <span>d</span>
              <span>o</span>
              <span>h</span>
            </p>
          </div>
        </Link>
      </h3>
    )
  }
  return (
    <div>
      <header>{header}</header>
      <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: "100%",
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}>
        <main
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          minHeight: "85vh",
        }}>{children}</main>
        <footer>
          <p>© {new Date().getFullYear()}, Built with ❤️️</p>
        </footer>
      </div>
    </div>
  )
}

export default Layout
