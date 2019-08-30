import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <>  
    <Layout>
        <SEO title="About"/>
    </Layout>
    <h1> About Page </h1>
    <ul>
        <li>
            <Link to="/about" activeStyle={{color: 'red'}}>About</Link>
        </li>
        <li>
            <Link to="/" >Home</Link>
        </li>
    </ul>
  </>  
)

export default AboutPage