import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Navigation from "./Navigation"
import { Container } from "react-bootstrap"
import Footer from "./Footer"

// smooth-scroll
// refer to https://www.npmjs.com/package/smooth-scroll
if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Container fluid>
        <Navigation siteTitle="Foodko" />
        <div className="content">
          <main>{children}</main>
          <Footer />
        </div>
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
