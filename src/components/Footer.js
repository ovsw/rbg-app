import React from 'react'
import { Link } from 'gatsby'

const Footer = props => (
  <footer className="page_footer ds ms section_padding_50">
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-6 to_animate animated fadeInUp">
          <div className="widget widget_text">
            <h3 className="widget-title">Raben Glass LLC</h3>
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
                  <a href="blog-single-right.html">02.01.2019</a>
                </p>
                <p>Lorem ipsum dolor simet </p>
              </li>
              <li>
                <p className="post-date">
                  <a href="blog-single-right.html">04.01.2019 </a>
                </p>
                <p>Consetetur spselitrsed diam</p>
              </li>
              <li>
                <p className="post-date">
                  <a href="blog-single-right.html">07.01.2019 </a>
                </p>
                <p>Nonumy eirmod tempor</p>
              </li>
            </ul>
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
)

export default Footer
