import React from 'react'
import { Link } from 'gatsby'
import VideoBgImage from '../../images/video-bg.jpg'

const About = props => (
  <section id="about" className="ds section_padding_top_100 section_padding_bottom_75 columns_margin_bottom_30">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-md-push-6">
          <div className="embed-responsive embed-responsive-3by2">
            {/* <a href="//player.vimeo.com/video/1084537" className="embed-placeholder">
              <img src={VideoBgImage} alt="" />
            </a> */}
            <video id="background-video" loop autoPlay muted>
              <source src="https://rbgvideo-ac97.kxcdn.com/shower-cabin-time-lapse-1.mp4" type="video/mp4" />
              {/* <source
                src="https://www.sample-videos.com/video123/mp4/480/big_buck_bunny_480p_5mb.ogg"
                type="video/ogg"
              /> */}
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="col-md-6 col-md-pull-6">
          <span className="small-text big highlight">Glass Repair &amp; Replacement Mesa AZ</span>
          <h2 className="section_header">About Raben Glass</h2>
          <hr className="divider_60_2 main_bg_color" />
          <p className="bold grey">
            We are family owned and operated, with over 40 years of experience working in the Glass Industry.
          </p>
          <p>
            At Raben Glass, we put YOU first while making sure we provide the best service we possibly can. We look
            forward to working with you for all your glass repair and replacement needs. Raben Glass LLC is licensed,
            bonded and insured.
          </p>
          <p>
            <Link to="/contact" className="theme_button color1">
              Free Quote
            </Link>
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default About
