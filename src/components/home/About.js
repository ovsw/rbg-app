import React from 'react'

const About = props => (
  <section id="about" className="ls section_padding_top_100 section_padding_bottom_75 columns_margin_bottom_30">
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
          <span className="small-text big highlight">Who is clearview?</span>
          <h2 className="section_header">About Our Company</h2>
          <hr className="divider_60_2 main_bg_color" />
          <p className="bold grey">
            A specialized team of experienced technicians thriving to help clients in their needs.
          </p>
          <p className="">
            Since 2001, ClearView has specialized in repairing and replacing auto glass, windshields, automotive
            tinting, mobile services and more!
          </p>
          <p className="">
            Our full line of services is backed by decades of delivering quality workmanship and value to our customers.
            At ClearView, we pride ourselves on providing superior products and services for every one of our customers.
            It's what makes us the clear choice for all your glass needs.{' '}
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default About
