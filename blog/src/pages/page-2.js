import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

import styled from "styled-components"
import { Devotions } from "../components/devotions"

const SecondPage = ({ data }) => {
  return (
    <Layout>
      <h1>The Lord is interested in your heart.</h1>
      <h3>Your daily devotions:</h3>
      <Devotions data={data}></Devotions>
    </Layout>
  )
}

export const Head = () => <Seo title="Devotions" />
export default SecondPage

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
