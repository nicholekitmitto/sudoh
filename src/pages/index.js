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
import { myContext } from "../components/provider";

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  
  return (
    <myContext.Consumer>
      {context => (
        <React.Fragment>
          <div>
            <SEO
                title="Sudoh"
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
              <div>
                <a href="https://github.com/nicholedwight" title="Peep my Github!" aria-label="Peep my Github" target="_blank">
                  <svg viewBox="0 0 18 16" style={{width: 20, height: 20}}>
                    <g>
                      <path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8"></path>
                    </g>
                  </svg>
                </a>
                <a href="https://twitter.com/sudohinbeta" title="Follow me on Twitter!" aria-label="Follow me on Twitter" target="_blank">
                  <svg viewBox="0 0 18 16" style={{width: 20, height: 20}}>
                    <g>
                      <path d="M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.375-1.337.648-2.085.795-.598-.638-1.45-1.036-2.396-1.036-1.812 0-3.282 1.468-3.282 3.28 0 .258.03.51.085.75C5.152 5.39 2.733 4.084 1.114 2.1.83 2.583.67 3.147.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.416-.02-.617-.058.418 1.304 1.63 2.253 3.067 2.28-1.124.88-2.54 1.404-4.077 1.404-.265 0-.526-.015-.783-.045 1.453.93 3.178 1.474 5.032 1.474 6.038 0 9.34-5 9.34-9.338 0-.143-.004-.284-.01-.425.64-.463 1.198-1.04 1.638-1.7z" fillRule="nonzero"></path>
                    </g>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/nicholedwight/" title="Connect with me on LinkedIn!" aria-label="Connect with me on LinkedIn" target="_blank">
                  <svg viewBox="0 0 18 16" style={{width: 20, height: 20}}>
                    <g>
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fillRule="nonzero"></path>
                    </g>
                  </svg>
                </a>
              </div>
            </footer>
          </div>
        </React.Fragment>
      )}
    </myContext.Consumer>
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
