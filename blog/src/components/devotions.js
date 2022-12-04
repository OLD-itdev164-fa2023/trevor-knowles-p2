import * as React from "react"
import styled from "styled-components"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import * as styles from "../components/index.module.css"

const ContainderDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2em;
`
const Cell = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(3, auto);
  color: white;
//   min-height: 400px;
  overflow:hidden;
  box-shadow: 3px 3px 15px -1px #000000;
//   &:hover {
//     transform: scale(1.5);
//     z-index: 0;
//   }
//   transition: transform 330ms ease-in-out;
`
const Info = styled.div`
  grid-column: 1 / 3;
  grid-row: 2 / 4;
  z-index: 1000;
  background-color: rgba(180, 180, 180, .5);
  backdrop-filter: blur(15px);
  text-shadow: 3px 2px 4px rgba(0,0,0,0.63);
  height: 200px;
  padding: 0em .5em 1em .5em;
  margin: 0 .5em 1em .5em;
  border-radius: 10px;
  overflow:hidden;
`
const ImgLayer = styled.div`
  grid-row: 1 / 4;
  grid-column: 1 / 3;
  height: 360px;
  overflow:hidden;
  &:hover {
  }
`

export const Devotions = ({ data }) => {
  console.log(data)
  return (
    <ContainderDiv>
      {data.allContentfulBlogPost.edges.map(edge => (
        <Cell key={edge.node.id}>
          <ImgLayer>
            <GatsbyImage image={edge.node.heroImage.gatsbyImageData} />
          </ImgLayer>
          <Info>
            <Link to={`/${edge.node.slug}`}>{edge.node.title}</Link>
            <div>{edge.node.body.childMarkdownRemark.excerpt}</div>
          </Info>
        </Cell>
      ))}
    </ContainderDiv>
  )
}
