import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

const NewsImage = styled(Img)`
  height: 250px;
`

const NewsItem = ({ node: { title, intro, shortDate, coverImage } }) => (
  <div className="col-sm-4 ">
    <article className="post vertical-item content-padding ls ms rounded overflow_hidden">
      <div className="item-media entry-thumbnail top_color_border">
        <NewsImage fluid={coverImage.fluid} alt={coverImage.alt} />
      </div>
      <div className="item-content">
        <header className="entry-header">
          <div className="categories-links highlightlinks">
            <a href="blog-right.html">{shortDate}</a>
          </div>
          <h4 className="entry-title">
            <a href="blog-single-right.html">{title}</a>
          </h4>
        </header>
        <div className="entry-content">
          <div dangerouslySetInnerHTML={{ __html: intro }} />
        </div>
      </div>
    </article>
  </div>
)

export default NewsItem
