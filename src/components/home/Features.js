import React from 'react'

const Features = props => (
  <section id="fuatures" className="ds columns_padding_0 columns_margin_0 container_padding_0">
    <div className="container-fluid">
      <div className="row flex-row">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="teaser media media-xxs-block inline-block cs with_padding big_padding margin_0">
            <div className="media-left media-middle">
              <div className="teaser_icon size_big inline-block round light_bg_color thick_border_icon">
                <i className="fa fa-truck highlight teaser_icon" aria-hidden="true" />
              </div>
            </div>
            <div className="media-body media-middle">
              <h4 className="text-uppercase bottommargin_10">
                <a href="#0">Shipping Worldwide</a>
              </h4>
              <p>At vero eos accusam justo duo dolores rebum stet clita kasd gubergren.</p>
            </div>
          </div>
        </div>
        <div className="lscol-lg-4 col-md-6 col-sm-12">
          <div className="teaser media media-xxs-block inline-block ds  with_padding big_padding margin_0">
            <div className="media-left media-middle">
              <div className="teaser_icon size_big inline-block round light_bg_color thick_border_icon">
                <i className="fa fa-user highlight2 teaser_icon" aria-hidden="true" />
              </div>
            </div>
            <div className="media-body media-middle">
              <h4 className="text-uppercase bottommargin_10">
                <a href="#0">Partnership Program</a>
              </h4>
              <p>No sea takimata sanctus est Lorem ipsum dolor sit amet lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12">
          <div className="teaser media media-xxs-block inline-block cs main_color2 with_padding big_padding margin_0">
            <div className="media-left media-middle">
              <div className="teaser_icon size_big inline-block round light_bg_color thick_border_icon">
                <i className="fa fa-tags highlight2 teaser_icon" aria-hidden="true" />
              </div>
            </div>
            <div className="media-body media-middle">
              <h4 className="text-uppercase bottommargin_10">
                <a href="#0">Duscounts &amp; Sale</a>
              </h4>
              <p>Consetetur sacing elited diam nonumy eirmod tempor invidunt ut labore et.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Features
