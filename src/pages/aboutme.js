// Gatsby supports TypeScript natively!
import React from "react"
// import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
// import SEO from "../components/seo"
import Image from "../components/image2"
import Introduce from "../components/introduce"

const AboutMe = () => {
  return(
    <Layout>
      <div className="introduceMe">
        <div className="intro-text">
          <Introduce />
        </div>
        <div intro-pic>
          <Image />
        </div>
      </div>
    </Layout>
  )
}

export default AboutMe