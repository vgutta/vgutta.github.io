import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import guttacv from "../assets/guttaCV.pdf"

const CvPage = () => (
    <Layout>
    <SEO title="About" />
    <h1>Check out my <a href={guttacv} target="_blank">CV</a></h1>
    
    <Link to="/">Go back to the homepage</Link>
    </Layout>
)

export default CvPage