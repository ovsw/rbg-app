import React from 'react'
import styled from 'styled-components'
import media from './responsive'

const ServicesContainer = styled.div`
  ${tw`flex flex-wrap justify-center`};
  border-top: 1px solid #bfbfbf;
`
const ServiceItem = styled.div`
  ${tw`w-full p-8`};

  ${media.lg`
    ${tw`w-1/3`};
  `};
  border: 1px solid #bfbfbf;
  border-top: none;
  border-right: none;
  &:nth-child(3),
  &:nth-child(6) {
    border-right: 1px solid #bfbfbf;
  }
  &:last-child {
    border-right: 1px solid #bfbfbf;
  }
`

const ServicesListing = ({ services }) => (
  <ServicesContainer className="row">
    {services.map((service, i) => (
      <ServiceItem key={service.title} className="teaser text-center">
        <div className="">
          <div className="teaser_icon border_icon  main_bg_color size_normal ">
            <i className="rt-icon2-lightbulb" />
          </div>
          <h3>{service.title}</h3>
          <p>{service.text}</p>
          <a className="theme_button inverse" href="#">
            More
          </a>
        </div>
      </ServiceItem>
    ))}
  </ServicesContainer>
)

export default ServicesListing
