import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Partners from './Partners'

const BadgeImageWrapper = styled(Link)`
  ${tw`block mx-auto`};
  max-width: 200px;
`

const Footer = props => {
  const data = useStaticQuery(graphql`
    query {
      guaranteeBadgeImg: file(relativePath: { eq: "guarantee-badge.png" }) {
        childImageSharp {
          fluid(maxWidth: 220) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      allDatoCmsPartner(sort: { fields: [position], order: ASC }) {
        edges {
          node {
            name
            position
            website
            logo {
              url
              fixed(height: 80, imgixParams: { fm: "png", auto: "compress" }) {
                ...GatsbyDatoCmsFixed_noBase64
              }
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <Partners partnerData={data.allDatoCmsPartner.edges} />

      <footer className="page_footer ds ms section_padding_50">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6 to_animate animated fadeInUp">
              <div className="widget widget_text">
                <h3 className="widget-title">Raben Glass LLC</h3>
                <p>
                  Consetetur sadipscing elitr, sed dinonumy eirmod tempor ut labore edolore magna aliquyam erat, sed
                  diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum stet clita kasd gubergren.
                </p>
                <p className="topmargin_40">
                  <a href="#" className="theme_button color1">
                    Free Quote
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 to_animate animated fadeInUp">
              <div className="widget widget_recent_entries">
                <BadgeImageWrapper to="/our-guarantee">
                  <Img fluid={data.guaranteeBadgeImg.childImageSharp.fluid} alt="100% Guarantee Badge" />
                </BadgeImageWrapper>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 to_animate animated fadeInUp">
              <div className="widget widget_text">
                <h3 className="widget-title">Contact Us</h3>
                <p>PO Box 7685, Mesa, AZ 85216, United States</p>
                <ul className="list1 no-bullets">
                  <li>
                    <i className="rt-icon2-device-phone highlight" /> <a href="tel:623-466-5376">(623) 466 5376</a>
                  </li>
                  <li>
                    <i className="rt-icon2-globe-outline highlight" /> <Link to="/">https://www.rabenglass.com/</Link>
                  </li>
                  <li>
                    <i className="rt-icon2-mail2 highlight" />
                    <a href="mailto:rabenglassllc@gmail.com">rabenglassllc@gmail.com</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 to_animate animated fadeInUp">
              <div className="widget widget_text">
                <h3 className="widget-title">Stay Tunned</h3>
                <div className="media small-media">
                  <div className="media-left media-middle">
                    <a
                      href="https://www.facebook.com/ashur.raben.5"
                      className="social-icon color-icon border-icon rounded-icon socicon-facebook"
                      rel="noopener noreferrer"
                      target="_blank"
                    />
                  </div>
                  <div className="media-body media-middle">Facebook</div>
                </div>
                <div className="media small-media">
                  <div className="media-left media-middle">
                    <a
                      href="/"
                      className="social-icon color-icon border-icon rounded-icon socicon-twitter"
                      rel="noopener noreferrer"
                      target="_blank"
                    />
                  </div>
                  <div className="media-body media-middle">Twitter</div>
                </div>
                <div className="media small-media">
                  <div className="media-left media-middle">
                    <a
                      href="/"
                      className="social-icon color-icon border-icon rounded-icon socicon-linkedin"
                      rel="noopener noreferrer"
                      target="_blank"
                    />
                  </div>
                  <div className="media-body media-middle">LinkedIn</div>
                </div>
                <div className="media small-media">
                  <div className="media-left media-middle">
                    <a
                      href="/"
                      className="social-icon color-icon border-icon rounded-icon socicon-pinterest"
                      rel="noopener noreferrer"
                      target="_blank"
                    />
                  </div>
                  <div className="media-body media-middle">Pinterest</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
