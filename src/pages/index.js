import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Chapter1 from "../images/Chapter1.png"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Chatting with Glue" />
    <img src={Chapter1} alt="Chapter 1" />
    <Link to="/page-2">Chapter 2 {">"}</Link>
  </Layout>
)

export default IndexPage
