import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
// import Loading from "../components/loading"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="top-image">
      <Image />
      <p>Welcome to my Portfolio</p>
    </div>
  </Layout>
)

export default IndexPage
