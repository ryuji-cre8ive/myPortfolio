// Gatsby supports TypeScript natively!
import React from "react"
// import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
// import SEO from "../components/seo"
import Image1 from "../components/image2"
import Introduce from "../components/introduce"
import Image4 from "../components/image4"
import Contact from "../components/contactMe"

const AboutMe = () => {
  return(
    <Layout>
      <div className="introduceMe">
        <div className="intro-text">
          <Introduce />
        </div>
        <div intro-pic>
          <div className="pc-intro-pic">
            <Image1 />
          </div>
          <div className="phone-intro-pic">
            <Image4 />
          </div>
          <Contact />
        </div>
      </div>
    </Layout>
  )
}

export default AboutMe