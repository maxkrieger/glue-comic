import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const SecondPage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "Chapter3.png" }) {
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
      <SEO title="Chapter 3" />
      <Img
        fluid={data.placeholderImage.childImageSharp.fluid}
        alt="Chapter 3"
        style={{ maxWidth: "700px" }}
      />
      <div style={{ textAlign: "center" }}>
        <Link to="/page-4">Chapter 4 {">"}</Link>
      </div>
      <Link to="/page-2">{"<"} Chapter 2</Link>
    </Layout>
  )
}

export default SecondPage
