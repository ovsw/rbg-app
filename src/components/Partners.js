import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Slider from 'react-slick'

const SliderStyled = styled(Slider)`
  ${tw` py-16`};
  & .slick-list .slick-track .slick-slide {
    opacity: 0.6;
    transition: opacity 0.5s linear;
  }
  & .slick-list .slick-track .slick-slide.slick-center {
    opacity: 1;
  }
`
const SliderItem = styled.div`
  ${tw`px-8`};
`

const Partners = ({ partnerData }) => {
  const slideshowSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    lazyLoad: false,
    speed: 1000,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
    cssEase: 'linear',
    centerMode: true,
    centerPadding: '1px',
  }

  return (
    <section id="partners" className="cs section_padding_top_40 section_padding_bottom_40">
      {console.log(partnerData)}
      <SliderStyled {...slideshowSettings}>
        {partnerData.map(({ node }) => (
          <SliderItem>
            <a href={node.website} target="_blank" rel="noopener noreferrer">
              <Img fixed={node.logo.fixed} alt="" />
            </a>
          </SliderItem>
        ))}
      </SliderStyled>
    </section>
  )
}

export default Partners
