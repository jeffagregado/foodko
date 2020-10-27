import React from "react"
import Hero from "../components/Hero"
import SectionOne from "../components/LandingPage/SectionOne"
import SectionThree from "../components/LandingPage/SectionThree"
import SectionTwo from "../components/LandingPage/SectionTwo"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <SectionOne />
    <SectionTwo />
    <SectionThree />
  </Layout>
)

export default IndexPage
