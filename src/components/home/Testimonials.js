import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import Arrow from '../Slideshow/Arrow'
import 'slick-carousel/slick/slick.css'

const SliderStyled = styled(Slider)`
  ${tw``};
`
const SliderArrow = styled(Arrow)`
  color: ${props => props.theme.accentColor};
  font-size: 17px !important;
  ${tw`absolute`};
  top: -4rem;

  left: auto;
  right: ${props => (props.dir === 'left' ? '10rem !important' : '5rem !important')};
`

function NextArrow(props) {
  const { className, style, onClick } = props
  return (
    <SliderArrow dir="right" onClick={onClick}>
      {/* <FontAwesomeIcon icon={faChevronRight} /> */}
      &gt;
    </SliderArrow>
  )
}

function PrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <SliderArrow dir="left" onClick={onClick}>
      {/* <FontAwesomeIcon icon={faChevronLeft} /> */}
      &lt;
    </SliderArrow>
  )
}

const Testimonials = ({ slides }) => {
  const slideshowSettings = {
    dots: false,
    infinite: true,
    autoplay: false,
    lazyLoad: true,
    speed: 500,
    autoplaySpeed: 5500,
    pauseOnHover: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  }

  return (
    <section id="testimonials" className="ls section_padding_top_100 section_padding_bottom_100">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <span className="small-text big highlight">Testimonials</span>
            <h2 className="section_header">What our clients say</h2>
            <hr className="divider_60_2 main_bg_color" />
            <SliderStyled {...slideshowSettings}>
              {slides.map(({ node }, index) => (
                <div className="owl-item active" key={node.authorName}>
                  <blockquote className="media">
                    <div className="media-body media-middle with_padding with_background bottom_color_border bottom_rounded">
                      «{node.text}»
                    </div>
                    <div className="media-right media-middle item-meta">
                      <h4 className="margin_0">{node.authorName}</h4>
                      <p>{node.date}</p>
                      <span className="star-rating" title="Rated 5.0 out of 5">
                        <span>
                          <strong className="rating">5.0</strong> out of 5
                        </span>
                      </span>
                    </div>
                  </blockquote>
                </div>
              ))}
            </SliderStyled>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
