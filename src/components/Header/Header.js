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
            <a
              href="https://www.facebook.com/rabenglassaz"
              title="Facebook"
              style={{ marginLeft: '0.51rem' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="social-icon color-icon socicon-facebook" />
            </a>
            <a
              href="https://twitter.com/RabenGlass"
              title="Twitter"
              style={{ marginLeft: '0.51rem' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="social-icon color-icon socicon-twitter" />
            </a>
            <a
              href="https://www.instagram.com/rabenglass/"
              title="Instagram"
              style={{ marginLeft: '0.51rem' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="social-icon color-icon socicon-instagram" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCLMSBR0PrpMC-1px44GhJBg"
              title="YouTube"
              style={{ marginLeft: '0.51rem' }}
              target="_blank"
              rel="noopener noreferrer"
            >
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
