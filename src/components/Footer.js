import React from 'react'

const Footer = props => (
  <footer className="page_footer ds ms section_padding_50">
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-6 to_animate animated fadeInUp">
          <div className="widget widget_text">
            <h3 className="widget-title">Why Us?</h3>
            <p>
              Consetetur sadipscing elitr, sed dinonumy eirmod tempor ut labore edolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum stet clita kasd gubergren.
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
            <h3 className="widget-title">Latest Posts</h3>
            <ul>
              <li>
                <p className="post-date">
                  <a href="blog-single-right.html">02.01.2017</a>
                </p>
                <p>Lorem ipsum dolor simet </p>
              </li>
              <li>
                <p className="post-date">
                  <a href="blog-single-right.html">04.01.2017 </a>
                </p>
                <p>Consetetur spselitrsed diam</p>
              </li>
              <li>
                <p className="post-date">
                  <a href="blog-single-right.html">07.01.2017 </a>
                </p>
                <p>Nonumy eirmod tempor</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 to_animate animated fadeInUp">
          <div className="widget widget_text">
            <h3 className="widget-title">Contact Us</h3>
            <p>PO Box 54321 Some str. 765, Los Angeles, California, United States</p>
            <ul className="list1 no-bullets">
              <li>
                <i className="rt-icon2-device-phone highlight" /> +12 345 678 9123
              </li>
              <li>
                <i className="rt-icon2-globe-outline highlight" /> <a href="./">www.company.com</a>
              </li>
              <li>
                <i className="rt-icon2-mail2 highlight" /> <a href="mailto:info@company.com">info@company.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 to_animate animated fadeInUp">
          <div className="widget widget_text">
            <h3 className="widget-title">Stay Tunned</h3>
            <div className="media small-media">
              <div className="media-left media-middle">
                <a href="#" className="social-icon color-icon border-icon rounded-icon socicon-facebook" />
              </div>
              <div className="media-body media-middle">Facebook</div>
            </div>
            <div className="media small-media">
              <div className="media-left media-middle">
                <a href="#" className="social-icon color-icon border-icon rounded-icon socicon-twitter" />
              </div>
              <div className="media-body media-middle">Twitter</div>
            </div>
            <div className="media small-media">
              <div className="media-left media-middle">
                <a href="#" className="social-icon color-icon border-icon rounded-icon socicon-linkedin" />
              </div>
              <div className="media-body media-middle">LinkedIn</div>
            </div>
            <div className="media small-media">
              <div className="media-left media-middle">
                <a href="#" className="social-icon color-icon border-icon rounded-icon socicon-pinterest" />
              </div>
              <div className="media-body media-middle">Pinterest</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
