import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"
import Background from "../components/background"
import Planetleft from "../components/planetleft"
import Planetright from "../components/planetright"
import Border from "../components/mobileborder"
import Hero from "../components/hero"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import { myContext } from "../components/provider";

const Secplus = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    
    return (
        <myContext.Consumer>
            {context => (
            <React.Fragment>
                <div>
                    <Border />
                    <Planetleft />
                    <Planetright />
                    <Background />
                    <Hero />
                    <Header />
                    <Layout location={location} title={siteTitle}>
                        <SEO title="Sudoh | Sec+ Study Guide" />

                        <h1>Security+ Study Guide</h1>
                        <p>Here you can find my personal study notes for the Security+ exam, I've modified my notes to fit more of a blog post style, and together all the chapters create a great in-depth study guide!</p>
                        <p>These notes were from reading through the Get Certified Get Ahead SY0-501. You can get your own copy of that book <a href="https://www.amazon.com/CompTIA-Security-Get-Certified-Ahead/dp/1939136059/" target="_blank">here</a>.</p>
                        <p>Please don't take these notes as everything you'll need to pass the exam, they're just a guide! I highly encourage you to do your own research on these topics and any topics related to them or future objectives to ensure you have all the knowledge you need to pass the exam :)</p>
                        <div className="link-wrapper">
                          <Link to="/secplus1/" className="display-block">
                              Chapter 1 - Introduction to Security Basics
                          </Link>
                          <Link to="/secplus2/" className="display-block">
                              Chapter 2 - Identity and Access Management
                          </Link>
                          <Link to="/secplus3/" className="display-block">
                              Chapter 3 - Networking Basics and Security
                          </Link>
                          <Link to="/secplus4/" className="display-block">
                              Chapter 4 - Securing your Network
                          </Link>
                        </div>
                    </Layout>
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
                        </div>
                    </footer>
                </div>
            </React.Fragment>
        )}
        </myContext.Consumer>
    )

}

export default Secplus

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
