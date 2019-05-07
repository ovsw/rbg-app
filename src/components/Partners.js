import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Slider from 'react-slick'

const SliderStyled = styled(Slider)`
  ${tw` py-16`};
  & .slick-list {
    height: 87px;
  }
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
const SliderLink = styled.div`
  ${tw`block`};
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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          autoplay: true,
          speed: 1000,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          autoplay: true,
          speed: 1000,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          autoplay: true,
          speed: 1000,
          autoplaySpeed: 2000,
        },
      },
    ],
  }

  return (
    <section id="partners" className="cs ">
      {console.log(partnerData)}
      <SliderStyled {...slideshowSettings}>
        {partnerData.map(({ node }) => (
          <SliderItem>
            <SliderLink href={node.website} target="_blank" rel="noopener noreferrer">
              <Img fixed={node.logo.fixed} alt="" />
            </SliderLink>
          </SliderItem>
        ))}
      </SliderStyled>
    </section>
  )
}

export default Partners
