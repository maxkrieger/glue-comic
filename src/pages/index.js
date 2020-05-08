import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "Chapter1.png" }) {
        childImageSharp {
          fluid(maxWidth: 750, fit: CONTAIN) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Chapter 1" />
      <Img
        fluid={data.placeholderImage.childImageSharp.fluid}
        alt="Chapter 1"
        style={{ maxWidth: "700px" }}
      />
      <div style={{ textAlign: "center" }}>
        <Link to="/page-2">Chapter 2 {">"}</Link>
      </div>
    </Layout>
  )
}

export default IndexPage
