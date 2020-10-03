import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Navigation from "./Navigation"
import { Container } from "react-bootstrap"

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
        <Navigation siteTitle={data.site.siteMetadata.title} />
        <div>
          <main>{children}</main>
        </div>
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
