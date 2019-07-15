import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'

const HeroSection = styled(BackgroundImage)`
  ${tw` py-20`};
  padding-top: 200px;
  /* border-bottom: 3px solid ${props => props.theme.accentColor}; */
`
const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  ${tw`absolute pin`};
`
const HeroContent = styled.div`
  ${tw`relative`};
  z-index: 10;
`
const HeroTitle = styled.h1`
  span {
    ${tw`block`};
    font-size: 2rem;
  }
`
const IntroText = styled.p`
  margin-top: 2rem;
`

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      slide1: file(relativePath: { eq: "hero.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1600, duotone: { highlight: "#ffffff", shadow: "#051020", opacity: 50 }) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  return (
    <HeroSection
      className="intro_section page_mainslider ds"
      fluid={data.slide1.childImageSharp.fluid}
      backgroundColor="#000000"
    >
      <Overlay />
      <HeroContent className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="">
              {/* *^^slide_description_wrapper */}
              <div className="slide_description">
                <div className="intro-layer to_animate animated fadeInUp" data-animation="fadeInUp">
                  <p className="bold text-uppercase highlight">welcome to Raben Glass</p>
                  <HeroTitle>
                    Glass Repair &amp; Replacement <span>Residential and Commercial</span>
                  </HeroTitle>
                </div>
                <IntroText className="intro-layer to_animate animated fadeInUp" data-animation="fadeInUp">
                  Over 40 years of experience in the glass industry.
                  <br /> Our work and products are guaranteed.
                </IntroText>
                <div className="intro-layer to_animate animated fadeInUp" data-animation="fadeInUp">
                  <div className="slide_buttons">
                    <a href="contact.html" className="theme_button color1">
                      Free Estimate
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </HeroContent>
    </HeroSection>
  )
}

export default Hero
