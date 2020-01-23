import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Pg1 from "../assets/Pg1.svg"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Chatting with Glue" />
    <Pg1 />
    <p>I'll be adding more in the next couple days</p>
    <Link to="/page-2/">To be continued</Link>
  </Layout>
)

export default IndexPage
