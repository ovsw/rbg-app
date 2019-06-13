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
                <h3 className="widget-title">Raben Glass</h3>
                <p>ROC# 317531 LICENSED, BONDED AND INSURED. ALL WORK AND PRODUCTS GUARANTEED.</p>
                <p>Showroom - by appointment only: 1826 W Broadway #25, Mesa AZ 85202</p>
                <p className="topmargin_40">
                  <Link to="/contact" className="theme_button color1">
                    Free Quote
                  </Link>
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
                {/* <p>PO Box 7685, Mesa, AZ 85216, United States</p> */}
                <ul className="list1 no-bullets">
                  <li>
                    <i className="rt-icon2-device-phone highlight" /> <a href="tel:623-466-5376">(623) 466 5376</a>
                  </li>
                  <li>
                    <i className="rt-icon2-globe-outline highlight" /> <Link to="/">https://www.rabenglass.com/</Link>
                  </li>
                  <li>
                    <i className="rt-icon2-mail2 highlight" />
                    <a href="mailto:info@rabenglass.com">info@rabenglass.com</a>
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
                      href="https://www.facebook.com/pg/Raben-Glass-Mesa-AZ-836410503382316"
                      className="social-icon color-icon border-icon rounded-icon socicon-facebook"
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  </div>
                  <div className="media-body media-middle">Facebook</div>
                </div>
                <div className="media small-media">
                  <div className="media-left media-middle">
                    <a
                      href="https://twitter.com/RabenGlass"
                      className="social-icon color-icon border-icon rounded-icon socicon-twitter"
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  </div>
                  <div className="media-body media-middle">Twitter</div>
                </div>
                <div className="media small-media">
                  <div className="media-left media-middle">
                    <a
                      href="https://www.instagram.com/rabenglass/"
                      className="social-icon color-icon border-icon rounded-icon socicon-instagram"
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  </div>
                  <div className="media-body media-middle">Instagram</div>
                </div>
                <div className="media small-media">
                  <div className="media-left media-middle">
                    <a
                      href="https://www.youtube.com/channel/UCLMSBR0PrpMC-1px44GhJBg"
                      className="social-icon color-icon border-icon rounded-icon socicon-youtube"
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  </div>
                  <div className="media-body media-middle">YouTube</div>
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
