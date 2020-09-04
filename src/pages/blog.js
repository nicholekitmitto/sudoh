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

const Blog = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    
    return (
        <div>
            <Border />
            <Planetleft />
            <Planetright />
            <Background />
            <Hero />
            <Header />
            <Layout location={location} title={siteTitle}>
                <SEO title="All posts" />
                {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug
                return (
                    <article key={node.fields.slug}>
                    <header>
                        <h3
                        style={{
                            marginBottom: rhythm(1 / 4),
                        }}
                        >
                        <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                            {title}
                        </Link>
                        </h3>
                        <small>{node.frontmatter.date}</small>
                    </header>
                    <section>
                        <p
                        dangerouslySetInnerHTML={{
                            __html: node.frontmatter.description || node.excerpt,
                        }}
                        />
                    </section>
                    </article>
                )
                })}
            </Layout>
            <footer className="page-footer">
                <p>© {new Date().getFullYear()}, Built with ❤️️</p>
            </footer>
        </div>
    )

}

export default Blog

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
