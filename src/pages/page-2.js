import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Time of your life and the best buy for your party</h1>
    <p>30.000 kr</p>
    <Link to="/">Go back</Link>
  </Layout>
)

export default SecondPage
