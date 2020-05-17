import React from "react"
// import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
// import SEO from "../components/seo"

import SkillBack from "../components/Back"
import SkillFront from "../components/Front"
import SkillOthers from "../components/Others"
// import GatsbyImage from "gatsby-image"

const Skill = () => {
  return(
    <Layout>
      <div className="skillComp">
        <SkillFront />
        <SkillBack />
        <SkillOthers />
      </div>
      
    </Layout>
  )
}

export default Skill