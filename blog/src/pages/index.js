import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

import styled from "styled-components"
import j1 from "../images/j1.png"
import j2 from "../images/j2.png"
import j3 from "../images/j3.png"
import j4 from "../images/j4.png"
import j5 from "../images/j5.png"
import j6 from "../images/j6.png"
import j7 from "../images/j7.png"
import j8 from "../images/j8.png"
import j9 from "../images/j9.png"

const DIV = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1em;
`
const IMG = styled.img`
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 0px;
  border-radius: 10px;
  border: 1px solid #7f8581;
  box-shadow: 3px 3px 15px -1px #000000;
  &:hover {
    transform: scale(1.5);
  }
  transition: transform 330ms ease-in-out;
`

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <h1>Start Your Day With God's Purpose in Mind</h1>
    <h3>
      Now then we are ambassadors for Christ, as though God did beseech you by
      us
    </h3>
    <DIV>
      <IMG src={j1}></IMG>
      <IMG src={j2}></IMG>
      <IMG src={j3}></IMG>
      <IMG src={j4}></IMG>
      <IMG src={j5}></IMG>
      <IMG src={j6}></IMG>
      <IMG src={j7}></IMG>
      <IMG src={j8}></IMG>
      <IMG src={j9}></IMG>
    </DIV>

    <h3>
      <Link to={`/page-2`}>Read devotions</Link>
    </h3>
  </Layout>
)

export default IndexPage

export const query = graphql`
  {
    allContentfulBlogPost {
      edges {
        node {
          id
          title
          slug
          body {
            childMarkdownRemark {
              excerpt
            }
          }
          heroImage {
            gatsbyImageData(
              layout: CONSTRAINED
              placeholder: BLURRED
              width: 300
            )
          }
        }
      }
    }
  }
`
