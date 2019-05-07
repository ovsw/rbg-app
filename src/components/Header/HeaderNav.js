import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Headroom from 'react-headroom'
import MainNav from './MainNav'

const HeaderWrapper = styled.div`
  ${tw`absolute pin-x`};
  background-color: rgba(0, 0, 0, 0.7);
  /* background-color: green; */
`
const TelLink = styled.a`
  color: white;
`
const Hamburger = styled.span`
  ${tw`relative`};
  z-index: 999;
  color: black;
  background-color: ${props => props.theme.accentColor};
  span {
    background-color: black !important;
  }
  span::before,
  span::after {
    background-color: black !important;
  }
`

const HeaderNav = ({ toggleMenu }) => (
  <Headroom
    style={{
      webkitTransition: 'all .5s ease-in-out',
      mozTransition: 'all .5s ease-in-out',
      oTransition: 'all .5s ease-in-out',
      transition: 'all .5s ease-in-out',
    }}
  >
    <HeaderWrapper className="">
      <header className="page_header header_darkgrey header_transparent tall_header toggler_xs_right columns_margin_0">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 display_table">
              <div className="header_left_logo display_table_cell">
                <Link to="/" className="logo top_logo">
                  <img src="/img/raben-glass-logo.png" alt="Raben Glass LLC logo" />
                </Link>
              </div>
              <div className="header_mainmenu display_table_cell text-center">
                <MainNav />
                {/* <!-- header toggler --> */}
                <Hamburger onClick={toggleMenu} className="toggle_menu">
                  <span />
                </Hamburger>
              </div>
              <div className="header_right_buttons display_table_cell text-right hidden-xs">
                <h5 className="thin text-uppercase margin_0">
                  <TelLink href="tel:623-4665376">Call for info</TelLink>
                </h5>
                <TelLink href="tel:623-4665376">
                  <span className="big regular">(623) 466 5376</span>
                </TelLink>
              </div>
            </div>
          </div>
        </div>
      </header>
    </HeaderWrapper>
  </Headroom>
)

export default HeaderNav
