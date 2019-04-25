import React from 'react'
import styled from 'styled-components'
import HpHeading from './home/HpHeading'

const ServicesContainer = styled.div`
  ${tw`flex flex-wrap`};
`
const ServiceItem = styled.div`
  ${tw` w-1/4`};
`

const ServicesListing = ({ services }) => (
  <ServicesContainer className="row">
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
  </ServicesContainer>
)

export default ServicesListing
