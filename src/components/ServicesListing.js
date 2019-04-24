import React from 'react'

const ServicesListing = ({ title, services }) => (
  <section className="ls  section_padding_top_50 section_padding_bottom_50">
    <div className="container">
      <div className="row">
        <div
          className="col-lg-12  col-sm-12 col-xs-12 to_animate text-center animated expandOpen"
          data-animation="expandOpen"
        >
          <p className="small-text big highlight text-center">{title}</p>
          <h2 className="section_header text-center">Services</h2>
          <hr className="divider_60_2 main_bg_color" />
        </div>
      </div>
      <div className="row">
        {services.map((service, i) => (
          <div
            key={i}
            className="col-lg-4 col-sm-6 col-xs-12 to_animate text-center animated fadeInUp"
            data-animation="fadeInUp"
          >
            <div className="teaser text-center with_border">
              <div className="teaser_icon border_icon  main_bg_color size_normal ">
                <i className="rt-icon2-lightbulb" />
              </div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <a className="theme_button inverse" href="#">
                More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default ServicesListing
