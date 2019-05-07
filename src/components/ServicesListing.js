import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import media from './responsive'

const ServicesContainer = styled.div`
  ${tw`flex flex-wrap justify-center`};
  border-top: 1px solid #bfbfbf;
`
const ServiceItem = styled.div`
  ${tw`flex justify-center items-center w-full p-8`};

  border: 1px solid #bfbfbf;
  border-top: none;
  border-right: 1px solid #bfbfbf;
  &:nth-child(3),
  &:nth-child(6) {
    border-right: 1px solid #bfbfbf;
  }
  &:last-child {
    border-right: 1px solid #bfbfbf;
  }

  ${media.lg`
    ${tw`w-1/3`};
  `};
  ${media.md`
    border-right: none;
  `}
`
const IconImageWrapper = styled.div`
  display: flex !important;
  margin: 0 auto;
  ${tw` justify-center items-center`};
  background-color: transparent !important;
  border: none !important;
`

const ServicesListing = ({ services, category }) => (
  <ServicesContainer className="row">
    {services.map(({ node }) => (
      <ServiceItem key={node.title} className="teaser text-center">
        <div className="">
          <IconImageWrapper className="teaser_icon border_icon  main_bg_color size_normal ">
            {/* <i className="rt-icon2-lightbulb" /> */}
            <Img fixed={node.iconImage.fixed} />
          </IconImageWrapper>
          <h3>{node.title}</h3>
          <p>{node.tagline}</p>
          <Link
            className="theme_button inverse"
            to={category === 'Residential' ? `/residential/${node.slug}` : `/commercial/${node.slug}`}
          >
            More
          </Link>
        </div>
      </ServiceItem>
    ))}
  </ServicesContainer>
)

export default ServicesListing
