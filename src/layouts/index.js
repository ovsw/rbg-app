/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Favicons from '../components/Favicons'

import PageTransition from '../components/pageTransitionPose'

import RBGTheme from '../theme/defaultTheme'

import MobileNav from '../components/Header/MobileNav'
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
      this.setState(state => ({
        isMenuOpen: !state.isMenuOpen,
      }))
    }

    this.closeMenu = () => {
      this.setState(state => ({
        isMenuOpen: false,
      }))
    }

    // snchronize the Menu component internal state with the state of this Layout component.
    // we update the isMenuOpen state of the Layout based on the isOpen state of the Menu component
    // otherwise  we have to click twice on the hamburger button to open the menu
    this.updateMenuState = menuState => {
      this.setState(state => ({
        isMenuOpen: menuState.isOpen,
      }))
    }
  }

  // async componentDidMount() {
  //   const reviews = await fetch('https://embedsocial.com/admin/v2/api/reviews/feeds', {
  //     method: 'get',
  //     // mode: 'cors',
  //     headers: new Headers({
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json; charset=utf-8',
  //       Authorization: 'Bearer es3bcbb940f72160a282283251efab7f',
  //     }),
  //   }).then(
  //     response => response.json()
  //     // response.json()
  //   )

  //   console.log(reviews)

  //   // this.setState({
  //   //   reviews,
  //   // })
  // }

  render() {
    const { children, location } = this.props
    const { isMenuOpen } = this.state

    return (
      <>
        <Favicons />
        <ThemeProvider theme={RBGTheme}>
          <div id="outer-container">
            <MobileNav isMenuOpen={isMenuOpen} updateMenuState={this.updateMenuState} closeMenu={this.closeMenu} />
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
      </>
    )
  }
}

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Layout
