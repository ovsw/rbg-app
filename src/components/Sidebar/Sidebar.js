import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import RecentPosts from './RecentPosts'
import Services from './Services'

const SidebarStyled = styled.aside``

const BadgeImage = styled(Img)`
  max-width: 200px;
  ${tw`mx-auto md:mx-0`}
`

const Sidebar = () => {
  const data = useStaticQuery(graphql`
    query {
      guaranteeBadgeImg: file(relativePath: { eq: "guarantee-badge.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <SidebarStyled className="col-sm-5 col-md-4 col-lg-3">
      {/* <div className="widget widget_search">
      <h3 className="widget-title">Search On Website</h3>
      <hr className="divider_60_2 main_bg_color" />
      <form className="searchform" action="./" method="get">
        <div className="form-group">
          <label className="sr-only" htmlFor="widget-search">
            Search for:
          </label>
          <input
            id="widget-search"
            className="form-control"
            name="search"
            type="text"
            value=""
            placeholder="Search Keyword"
          />
        </div>
        <button className="theme_button color1" type="submit">
          Search
        </button>
      </form>
    </div> */}
      <div className="widget widget_apsc_widget">
        <div>
          <a
            className="social-icon border-icon rounded-icon socicon-facebook"
            href="https://www.facebook.com/ashur.raben.5"
            title="Facebook"
            rel="nooperner noreferrer"
            target="_blank"
          />
          <a
            className="social-icon border-icon rounded-icon socicon-twitter"
            href="/"
            title="Twitter"
            rel="nooperner noreferrer"
            target="_blank"
          />
          <a
            className="social-icon border-icon rounded-icon socicon-youtube"
            href="/"
            title="Youtube"
            rel="nooperner noreferrer"
            target="_blank"
          />
          <a
            className="social-icon border-icon rounded-icon socicon-googleplus"
            href="/"
            title="Google Plus"
            rel="nooperner noreferrer"
            target="_blank"
          />
        </div>
      </div>
      <div className="widget">
        <Link to="/our-guarantee">
          <BadgeImage fluid={data.guaranteeBadgeImg.childImageSharp.fluid} alt="100% Guarantee Badge" />
        </Link>
      </div>
      <Services />
      <RecentPosts />

      {/* <div className="widget widget_mailchimp">
      <h3 className="widget-title">Newsletter Signup</h3>
      <hr className="divider_60_2 main_bg_color" />
      <form className="signup" action="./" method="get">
        <div className="form-group-wrap">
          <div className="form-group">
            <label className="sr-only" htmlFor="mailchimp">
              Enter your email here
            </label>
            <input
              id="mailchimp"
              className="mailchimp_email form-control"
              name="email"
              type="email"
              placeholder="Enter Your Email"
            />
          </div>
          <button className="theme_button color1" type="submit">
            Submit
          </button>
        </div>
        <div className="response"> </div>
      </form>
    </div> */}
    </SidebarStyled>
  )
}
export default Sidebar
