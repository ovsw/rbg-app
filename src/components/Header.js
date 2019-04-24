// import { Link } from "gatsby"
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <>
    <section className="cs main_color2  section_padding_top_5 section_padding_bottom_5  table_section      page_topline   table_section_sm">
      <div className="container">
        <div className="row">
          <div className="col-sm-8 text-center text-sm-left">
            <div className="">
              <i className="fa fa-clock-o rightpadding_5 " aria-hidden="true" />
              SEO Tagline goes right here at the top
            </div>
          </div>
          <div className="col-sm-4 text-center text-sm-right greylinks">
            <span className="rightpadding_10">Follow Us:</span>
            <a href="/" title="Facebook" style={{ marginLeft: '0.51rem' }}>
              <i className="social-icon color-icon socicon-facebook" />
            </a>
            <a href="/" title="Twitter" style={{ marginLeft: '0.51rem' }}>
              <i className="social-icon color-icon socicon-twitter" />
            </a>
            <a href="/" title="Twitter" style={{ marginLeft: '0.51rem' }}>
              <i className="social-icon color-icon socicon-google" />
            </a>
            <a href="/" title="Twitter" style={{ marginLeft: '0.51rem' }}>
              <i className="social-icon color-icon socicon-linkedin" />
            </a>
            <a href="/" title="Youtube" style={{ marginLeft: '0.51rem' }}>
              <i className="social-icon color-icon socicon-youtube" />
            </a>
          </div>
        </div>
      </div>
    </section>

    <div className="page_header_wrapper header_darkgrey header_transparent_wrap affix-top-wrapper">
      <header className="page_header header_darkgrey header_transparent tall_header toggler_xs_right columns_margin_0 affix-top">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 display_table">
              <div className="header_left_logo display_table_cell">
                <a href="/" className="logo top_logo">
                  <img src="/img/logo.png" alt="" />
                </a>
              </div>
              <div className="header_mainmenu display_table_cell text-center">
                {/* <!-- main nav start --> */}
                <nav className="mainmenu_wrapper">
                  <ul className="mainmenu nav sf-menu sf-js-enabled sf-arrows" style={{ touchAction: 'pan-y' }}>
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/">Residential</a>
                    </li>
                    <li>
                      <a href="/">Commercial</a>
                    </li>
                    <li>
                      <a href="/">Auto Glass</a>
                    </li>
                    <li>
                      <a href="/">Testimonials</a>
                    </li>
                    <li>
                      <a href="/">Blog</a>
                    </li>
                    <li>
                      <a href="/">Contact</a>
                    </li>
                  </ul>
                </nav>
                {/* <!-- eof main nav --> */}
                {/* <!-- header toggler --> */}
                <span className="toggle_menu">
                  <span />
                </span>
              </div>
              <div className="header_right_buttons display_table_cell text-right hidden-xs">
                <h5 className="thin text-uppercase margin_0">Call for info</h5>
                <span className="big regular">(623) 4665-376</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
