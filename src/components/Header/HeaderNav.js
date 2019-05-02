import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import MainNav from './MainNav'

const HeaderWrapper = styled.div`
  ${tw`absolute pin-x`};
  top: 60px;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.7);
  /* background-color: green; */
`
const TelLink = styled.a`
  color: white;
`

const HeaderNav = () => (
  <HeaderWrapper className="">
    <header className="page_header header_darkgrey header_transparent tall_header toggler_xs_right columns_margin_0">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 display_table">
            <div className="header_left_logo display_table_cell">
              <Link to="/" className="logo top_logo">
                <img src="/img/raben-glass-logo.png" alt="" />
              </Link>
            </div>
            <div className="header_mainmenu display_table_cell text-center">
              <MainNav />
              {/* <!-- header toggler --> */}
              <span className="toggle_menu">
                <span />
              </span>
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
)

export default HeaderNav
