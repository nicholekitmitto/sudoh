import React from "react"
import { Link, graphql } from "gatsby"

import Header from "../components/header"
import Background from "../components/background"
import Planetleft from "../components/planetleft"
import Planetright from "../components/planetright"
import Border from "../components/mobileborder"
import Hero from "../components/hero"
import Bio from "../components/bio"
import SEO from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  
  return (
    <div>
      <SEO
          title="Sudoh | hacker in training"
        />
      <Border />
      <Planetleft />
      <Planetright />
      <Background />
      <Hero />
      <Header />
      <Bio />
      <footer className="page-footer">
        <p>© {new Date().getFullYear()}, Built with ❤️️</p>
      </footer>
    </div>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
