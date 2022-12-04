import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"
import logo from '../images/logo.png'

const Outer = styled.header`
  background: ${props => props.theme.header.backgroundColor};
  margin-bottom: 1.45rem;
  margin: 0 auto;
  padding: var(--space-4) var(--size-gutter);
  display: flex;
  align-items: center;
  justify-content: space-between;
`



const IMG = styled.img`
  margin: 0px;
  height:auto;
  width:2.5em;
`

const H1 = styled.h1`
  margin: 0px;
  display: flex;
`

const StyledLink = styled(Link)`
  color: white;
  align-self:center;
  text-decoration: none;
  &:hover {
    color: lightgrey;
  }
`
const StyledNavBar = styled.div`
  color: white;
  align-self: end;
  text-decoration: none;
  display: flex;
  gap: 1em;
`

const Header = ({ siteTitle }) => (
  <Outer>
    <H1>
      <IMG src={logo}></IMG>
      <StyledLink to="/">{siteTitle}</StyledLink>
    </H1>
    <StyledNavBar>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/page-2">Devotions</StyledLink>
      <StyledLink to="/contact">Contacts</StyledLink>
    </StyledNavBar>
  </Outer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
