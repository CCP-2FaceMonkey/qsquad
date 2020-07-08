import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>CYBERpunk DJs</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image imageName="gatsby-astronaut.png"/>
    </div>
    <Link to="/page-2/">Submit a DJ request</Link> <br />
    {/* <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
  </Layout>
)

export default IndexPage
