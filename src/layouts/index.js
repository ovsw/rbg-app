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

class Layout extends React.Component {
  // const [isMenuOpen, toggleMenu] = useState(false)
  constructor(props) {
    super(props)

    this.state = {
      isMenuOpen: false,
    }

    this.toggleMenu = () => {
      this.setState(state => {
        console.log('from toggleMenu - is menu open?', state.isMenuOpen)
        return {
          isMenuOpen: !state.isMenuOpen,
        }
      })
    }

    // snchronize the Menu component internal state with the state of this Layout component.
    // we update the isMenuOpen state of the Layout based on the isOpen state of the Menu component
    // otherwise  we have to click twice on the hamburger button to open the menu
    this.updateMenuState = menuState => {
      console.log(menuState.isOpen)
      this.setState(state => ({
        isMenuOpen: menuState.isOpen,
      }))
    }
  }

  render() {
    const { children, location } = this.props
    const { isMenuOpen } = this.state

    const mobileMenuStyles = {
      bmCrossButton: {
        height: '44px',
        width: '44px',
      },
      bmCross: {
        background: '#81d612',
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
            onStateChange={this.updateMenuState}
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
            <Header toggleMenu={this.toggleMenu} />
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
}

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Layout
