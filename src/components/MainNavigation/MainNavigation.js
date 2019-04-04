import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Nav = styled.nav`
  background: #333;

  ul {
    margin: 0;
    padding: 0;
    grid-area: nav;
    margin-left: 0.5rem;
  }

  li {
    margin: 0;
    padding: 0;
  }

  a {
    color: #fff;
    text-decoration: none;
    margin-right: 1.5rem;
    text-transform: uppercase;

    &:hover {
      color: black;
    }
  }
`

const MainNavigation = () => (
  <Nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="contact">Contact</Link>
      </li>
    </ul>
  </Nav>
)

export default MainNavigation