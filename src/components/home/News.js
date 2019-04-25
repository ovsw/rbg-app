import React from 'react'
import NewsItem from './NewsItem'

const HomeNews = ({ newsItems }) => (
  <section className="ds section_padding_top_100 section_padding_bottom_75 columns_margin_bottom_30 columns_padding_25">
    {console.log(newsItems)}
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div
            className="col-lg-12  col-sm-12 col-xs-12 to_animate text-center animated expandOpen"
            data-animation="expandOpen"
            style={{ marginBottom: '0' }}
          >
            <p className="small-text big highlight text-center">Raben Glass</p>
            <h2 className="section_header text-center">Company News</h2>
            <hr className="divider_60_2 main_bg_color" />
          </div>
        </div>
      </div>
      <div className="row">
        {/* <div className="col-sm-3">
          <span className="small-text big highlight">Our blog</span>
          <h2 className="section_header">Our Latest News</h2>
          <hr className="divider_60_2 main_bg_color" />
          <div className="widget widget_categories">
            <ul className="greylinks">
              <li className="">
                <a href="blog-right.html">Auto glass</a>
              </li>
              <li className="">
                <a href="blog-right.html">Glass tining</a>
              </li>
              <li className="">
                <a href="blog-right.html">Glass replacement</a>
              </li>
              <li className="">
                <a href="blog-right.html">Chip repair</a>
              </li>
            </ul>
          </div>
        </div> */}
        <div className="col-sm-12">
          {newsItems.map(({ node }) => (
            <NewsItem node={node} key={node.slug} />
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default HomeNews
