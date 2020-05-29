import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Navs from "../components/nav"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "Chapter1.png" }) {
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
      <SEO title="Chapter 1" />
      <Img
        fluid={data.placeholderImage.childImageSharp.fluid}
        alt="Chapter 1"
        style={{ maxWidth: "700px" }}
      />
      <Navs right={2} />
    </Layout>
  )
}

export default IndexPage
