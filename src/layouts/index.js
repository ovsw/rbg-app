/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import styled, { ThemeProvider } from 'styled-components'
import PageTransition from '../components/pageTransitionPose'

import RBGTheme from '../theme/defaultTheme'

import Header from '../components/Header/Header'
import Footer from '../components/Footer'
import './layout.css'

const Copyright = styled.div`
  ${tw`p-4 text-center text-sm`};
  & a {
    ${tw`bold`};
    color: #ff125d;
  }
`

const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={RBGTheme}>
        <>
          <Header siteTitle={data.site.siteMetadata.title} />
          <div>
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
        </>
      </ThemeProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
