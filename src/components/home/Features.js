import React from 'react'
import styled from 'styled-components'

const Column = styled.div`
  border-right: 1px solid ${props => props.theme.accentColor};
`

const Features = props => (
  <section id="features" className="ds columns_padding_0 columns_margin_0 container_padding_0">
    <div className="container-fluid">
      <div className="row flex-row">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <Column className="teaser media media-xxs-block inline-block ds with_padding big_padding margin_0">
            <div className="media-left media-middle">
              <div className="teaser_icon size_big inline-block round light_bg_color thick_border_icon">
                <i className="fa fa-truck highlight teaser_icon" aria-hidden="true" />
              </div>
            </div>
            <div className="media-body media-middle">
              <h4 className="text-uppercase bottommargin_10">
                <a href="#0">Residential</a>
              </h4>
              <p>
                We offer repair to damaged glass and adding new glass to your home, call for free quote and estimates.
              </p>
            </div>
          </Column>
        </div>
        <div className="lscol-lg-4 col-md-6 col-sm-12">
          <Column className="teaser media media-xxs-block inline-block ds  with_padding big_padding margin_0">
            <div className="media-left media-middle">
              <div className="teaser_icon size_big inline-block round light_bg_color thick_border_icon">
                <i className="fa fa-user highlight2 teaser_icon" aria-hidden="true" />
              </div>
            </div>
            <div className="media-body media-middle">
              <h4 className="text-uppercase bottommargin_10">
                <a href="#0">Commercial</a>
              </h4>
              <p>Repair damaged glass and adding new glass to your home, call for free quote and estimates.</p>
            </div>
          </Column>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12">
          <Column className="teaser media media-xxs-block inline-block ds main_color2 with_padding big_padding margin_0">
            <div className="media-left media-middle">
              <div className="teaser_icon size_big inline-block round light_bg_color thick_border_icon">
                <i className="fa fa-tags highlight2 teaser_icon" aria-hidden="true" />
              </div>
            </div>
            <div className="media-body media-middle">
              <h4 className="text-uppercase bottommargin_10">
                <a href="#0">Auto Glass</a>
              </h4>
              <p>
                Glass repair and replacement for all types of makes and models on foreign and domestic. Providing
                service for all insurance claims.
              </p>
            </div>
          </Column>
        </div>
      </div>
    </div>
  </section>
)

export default Features
