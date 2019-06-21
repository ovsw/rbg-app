import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import RecentPosts from './RecentPosts'
import Services from './Services/Services'
import media from '../responsive'

const SidebarStyled = styled.aside``

const BadgeImage = styled(Img)`
  max-width: 200px;
  ${tw`mx-auto md:mx-0`}
`
const SocialWrapper = styled.div`
  ${media.xs`text-align: center`};
  ${media.md`text-align: left`};
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
      homeAdvisorBadgeImg: file(relativePath: { eq: "toprated-solid-border.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <SidebarStyled className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
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
        <SocialWrapper>
          <a
            className="social-icon border-icon rounded-icon socicon-facebook"
            href="https://www.facebook.com/pg/Raben-Glass-Mesa-AZ-836410503382316"
            title="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          />
          <a
            className="social-icon border-icon rounded-icon socicon-twitter"
            href="https://twitter.com/RabenGlass"
            title="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          />
          <a
            className="social-icon border-icon rounded-icon socicon-instagram"
            href="https://www.instagram.com/rabenglass/"
            title="Google Plus"
            target="_blank"
            rel="noopener noreferrer"
          />
          <a
            className="social-icon border-icon rounded-icon socicon-youtube"
            href="https://www.youtube.com/channel/UCLMSBR0PrpMC-1px44GhJBg"
            title="YouTube"
            target="_blank"
            rel="noopener noreferrer"
          />
        </SocialWrapper>
      </div>
      <div className="widget">
        <Link to="/our-guarantee">
          <BadgeImage fluid={data.guaranteeBadgeImg.childImageSharp.fluid} alt="100% Guarantee Badge" />
        </Link>
        <a href="https://www.homeadvisor.com/rated.RabenGlassLLC.70568813.html" rel="noopener noreferrer">
          <BadgeImage fluid={data.homeAdvisorBadgeImg.childImageSharp.fluid} alt="Home Advisor Top Rated Badge" />
        </a>
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
