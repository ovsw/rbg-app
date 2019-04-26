import React from 'react'
import NewsItem from './NewsItem'
import HpHeading from './HpHeading'

const HomeNews = ({ newsItems }) => (
  <section className="ds section_padding_top_100 section_padding_bottom_75 columns_margin_bottom_30 columns_padding_25">
    <div className="container">
      <HpHeading title="Company News" subtitle="Raben Glass" />
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
