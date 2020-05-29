import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Navs from "../components/nav"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const SecondPage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "Chapter2.png" }) {
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
      <SEO title="Chapter 2" />
      <Img
        fluid={data.placeholderImage.childImageSharp.fluid}
        alt="Chapter 2"
        style={{ maxWidth: "700px" }}
      />
      <Navs left={1} right={3} />
    </Layout>
  )
}

export default SecondPage
