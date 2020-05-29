import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Navs from "../components/nav"

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
      <Navs left={3} right={5} />
    </Layout>
  )
}

export default SecondPage
