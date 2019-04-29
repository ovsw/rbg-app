import React from 'react'
import styled from 'styled-components'
import RecentPosts from './RecentPosts'
import Services from './Services'

const SidebarStyled = styled.aside``

const Sidebar = () => (
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
    <Services />
    <RecentPosts />
    <div className="widget widget_apsc_widget">
      <h3 className="widget-title">Social News</h3>
      <hr className="divider_60_2 main_bg_color" />
      <div>
        <a className="social-icon border-icon rounded-icon socicon-facebook" href="/" title="Facebook" />
        <a className="social-icon border-icon rounded-icon socicon-twitter" href="/" title="Twitter" />
        <a className="social-icon border-icon rounded-icon socicon-youtube" href="/" title="Youtube" />
        <a className="social-icon border-icon rounded-icon socicon-googleplus" href="/" title="Google Plus" />
      </div>
    </div>
    <div className="widget widget_mailchimp">
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
    </div>
  </SidebarStyled>
)

export default Sidebar
