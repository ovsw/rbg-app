import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'

const HeroSection = styled(BackgroundImage)`
  ${tw` py-20`};
  border-bottom: 3px solid ${props => props.theme.accentColor};
`

const Hero = () => (
  <StaticQuery
    query={graphql`
      query {
        slide1: file(relativePath: { eq: "slide01.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <HeroSection className="intro_section page_mainslider ds" fluid={data.slide1.childImageSharp.fluid} Tag="section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="slide_description_wrapper">
                <div className="slide_description">
                  <div className="intro-layer to_animate animated fadeInUp" data-animation="fadeInUp">
                    <p className="bold text-uppercase highlight">welcome to the clearview</p>
                    <h2>We Provide 24/7 Mobile Service</h2>
                  </div>
                  <div className="intro-layer to_animate animated fadeInUp" data-animation="fadeInUp">
                    <p>
                      We Offers FREE mobile repair service, for all customers within a 25 mile range of our location.
                    </p>
                  </div>
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
        </div>
      </HeroSection>
    )}
  />
)

export default Hero
