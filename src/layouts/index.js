/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import styled, { ThemeProvider } from 'styled-components'
import { push as MobileMenu } from 'react-burger-menu'
import PageTransition from '../components/pageTransitionPose'

import RBGTheme from '../theme/defaultTheme'

import Header from '../components/Header/Header'
import Footer from '../components/Footer'
import './layout.css'

const Copyright = styled.div`
  ${tw`p-4 text-center text-sm`};
  color: #ccc;
  & a {
    ${tw`bold`};
    color: #ff125d;
  }
`

const Layout = ({ children, location }) => {
  const [isMenuOpen, toggleMenu] = useState(false)

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const mobileMenuStyles = {
    bmCrossButton: {
      height: '24px',
      width: '24px',
    },
    bmCross: {
      background: '#bdc3c7',
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%',
    },
    bmMenu: {
      background: '#373a47',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em',
    },
    bmMorphShape: {
      fill: '#373a47',
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em',
    },
    bmItem: {
      display: 'inline-block',
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)',
    },
  }

  return (
    <ThemeProvider theme={RBGTheme}>
      <div id="outer-container">
        <MobileMenu
          right
          isOpen={isMenuOpen}
          customBurgerIcon={false}
          pageWrapId="page-wrap"
          outerContainerId="outer-container"
          styles={mobileMenuStyles}
        >
          <a id="home" className="menu-item" href="/">
            Home
          </a>
          <a id="about" className="menu-item" href="/about">
            About
          </a>
          <a id="contact" className="menu-item" href="/contact">
            Contact
          </a>
        </MobileMenu>
        <div id="page-wrap">
          <Header siteTitle={data.site.siteMetadata.title} toggleMenu={toggleMenu} />
          <main>
            <PageTransition location={location}>{children}</PageTransition>
          </main>
          <Footer />
          <Copyright>
            © {new Date().getFullYear()} Raben Glass LLC, all rights reserved.
            {` `}
            Website by{' '}
            <a href="https://ovswebsites.com" target="_blank" rel="noopener noreferrer">
              OVS Websites
            </a>
          </Copyright>
        </div>
      </div>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
