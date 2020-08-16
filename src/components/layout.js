/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
          by Max Krieger, Jan 2020{" "}
          <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
            <img
              alt="Creative Commons License"
              style={{ borderWidth: 0, marginBottom: 0 }}
              src="https://i.creativecommons.org/l/by/4.0/88x31.png"
            />
          </a>
          <br />
          <Link to="/citations">citations</Link>{" "}
          <a href="https://zenodo.org/record/3889126">pdf</a>{" "}
          <a href="https://dl.acm.org/doi/abs/10.1145/3397537.3397550">
            cite via ACM
          </a>{" "}
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
