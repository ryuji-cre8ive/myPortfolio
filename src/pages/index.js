import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Image3 from "../components/image3"
// import Loading from "../components/loading"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="top-image">
        <div className="pc-top">
          <Image />
          <p>Welcome to my Portfolio</p>
        </div>
        <div className="phone-top">
          <Image3 />
          <p className="first">Welcome</p>
          <p className="second">to my</p>
          <p className="third">Portfolio</p>
        </div>
        
      </div>
    </Layout>
  )
}

export default IndexPage
