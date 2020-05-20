/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
// import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import Footer from "./footer"

import Header from "./header"
import "./layout.css"

export default ({ children }) => (
  <div className="page-root">
    <Header />
    <div className="page-body">
      {children}
    </div>
    <div className="footer-text">
      <Footer />
    </div>
  </div>
)
