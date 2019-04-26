import React from 'react'

const About = props => (
  <section id="about" className="ds section_padding_top_100 section_padding_bottom_75 columns_margin_bottom_30">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-md-push-6">
          <div className="embed-responsive embed-responsive-3by2">
            <a href="//player.vimeo.com/video/1084537" className="embed-placeholder">
              <img src="images/gallery/13.jpg" alt="" />
            </a>
          </div>
        </div>
        <div className="col-md-6 col-md-pull-6">
          <span className="small-text big highlight">Arizona Glass</span>
          <h2 className="section_header">About Raben Glass</h2>
          <hr className="divider_60_2 main_bg_color" />
          <p className="bold grey">
            Family owned and operated, with over 40 years of experience working in the Glass Industry.
          </p>
          <p className="">
            Here at Raben Glass we put you first while making sure we provide the best service we possibly can. We look
            forward to working with you for all your glass needs ​ Raben Glass LLC is licensed, bonded and insured.
          </p>
          <p>
            <a href="#" className="theme_button color1">
              Free Quote
            </a>
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default About
