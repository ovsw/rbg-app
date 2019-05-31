import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

const Column = styled(Link)`
  ${tw`block`}
  border-right: 1px solid ${props => props.theme.accentColor};
  border-bottom: 1px solid ${props => props.theme.accentColor};
`
const IconWrapper = styled.div`
  background-color: white;
  border-radius: 50%;
  padding: 30px;
`

const IconImage = styled(Img)`
  width: 80px;
  height: 80px;
`

const Features = props => {
  const data = useStaticQuery(graphql`
    query {
      res: file(relativePath: { eq: "residential.png" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      com: file(relativePath: { eq: "commercial.png" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      auto: file(relativePath: { eq: "auto.png" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <section id="features" className="ds columns_padding_0 columns_margin_0 container_padding_0">
      <div className="container-fluid">
        <div className="row flex-row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Column
              to="/residential"
              className="teaser media media-xxs-block inline-block ds with_padding big_padding margin_0"
            >
              <div className="media-left media-middle">
                <IconWrapper>
                  <IconImage fixed={data.res.childImageSharp.fixed} />
                </IconWrapper>
              </div>
              <div className="media-body media-middle">
                <h4 className="text-uppercase bottommargin_10">Residential</h4>
                <span>
                  We repair and replace single and dual pane windows and provide free measuring and estimates.
                </span>
              </div>
            </Column>
          </div>
          <div className="lscol-lg-4 col-md-6 col-sm-12">
            <Column
              to="/commercial"
              className="teaser media media-xxs-block inline-block ds  with_padding big_padding margin_0"
            >
              <div className="media-left media-middle">
                <IconWrapper>
                  <IconImage fixed={data.com.childImageSharp.fixed} />
                </IconWrapper>
              </div>
              <div className="media-body media-middle">
                <h4 className="text-uppercase bottommargin_10">Commercial</h4>
                <p>Tenant improvements and new construction, including storefront glass and entrances.</p>
              </div>
            </Column>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12">
            <Column
              to="/auto"
              className="teaser media media-xxs-block inline-block ds main_color2 with_padding big_padding margin_0"
            >
              <div className="media-left media-middle">
                <IconWrapper>
                  <IconImage fixed={data.auto.childImageSharp.fixed} />
                </IconWrapper>
              </div>
              <div className="media-body media-middle">
                <h4 className="text-uppercase bottommargin_10">Auto Glass</h4>
                <p>Preferred insurance provider. Repair and replacement for all vehicle makes and models.</p>
              </div>
            </Column>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
