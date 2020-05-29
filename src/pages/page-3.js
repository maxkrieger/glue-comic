import React from "react"

import Navs from "../components/nav"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const SecondPage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "Chapter3.png" }) {
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
      <SEO title="Chapter 3" />
      <Img
        fluid={data.placeholderImage.childImageSharp.fluid}
        alt="Chapter 3"
        style={{ maxWidth: "700px" }}
      />
      <Navs left={2} right={4} />
    </Layout>
  )
}

export default SecondPage
