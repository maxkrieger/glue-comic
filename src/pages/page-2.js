import React from "react"
import { Link } from "gatsby"

import Chapter2 from "../images/Chapter2.png"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Chatting with Glue, Chapter 2" />
    <img src={Chapter2} alt="Chapter 2" />
    <p>To be continued...</p>
    <Link to="/">{"<"} Chapter 1</Link>
  </Layout>
)

export default SecondPage
