import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import HeaderNav from './HeaderNav'

const TopBar = styled.section`
  color: black !important;
`

const Header = ({ siteTitle, toggleMenu }) => (
  <>
    <TopBar className="cs main_color2 section_padding_top_5 section_padding_bottom_5 table_section page_topline  able_section_sm">
      <div className="container">
        <div className="row">
          <div className="col-sm-8 text-center text-sm-left">
            <div className="">
              <i className="fa fa-star-o rightpadding_5 " aria-hidden="true" />
              Mesa Glass Repair and Replacement
            </div>
          </div>
          <div className="col-sm-4 text-center text-sm-right greylinks hidden-xs">
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
    </TopBar>

    <HeaderNav toggleMenu={toggleMenu} />
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
