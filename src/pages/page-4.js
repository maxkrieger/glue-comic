import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const SecondPage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "Chapter4.png" }) {
        childImageSharp {
          fluid(maxWidth: 750, fit: CONTAIN, quality: 99) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Chapter 4" />
      <Img
        fluid={data.placeholderImage.childImageSharp.fluid}
        alt="Chapter 4"
        style={{ maxWidth: "700px" }}
      />
      <div style={{ textAlign: "center" }}>
        <Link to="/page-5">Chapter 5 {">"}</Link>
      </div>
      <Link to="/page-3">{"<"} Chapter 3</Link>
    </Layout>
  )
}

export default SecondPage
