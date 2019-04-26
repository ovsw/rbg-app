import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const NewsImage = styled(Img)`
  height: 250px;
`
const ImageLink = styled(Link)`
  display: block;
`

const NewsItem = ({ node: { title, intro, shortDate, coverImage, slug } }) => (
  <div className="col-sm-4 ">
    <article className="post vertical-item content-padding ls ms rounded overflow_hidden">
      <ImageLink to={`/news/${slug}`} className="item-media entry-thumbnail top_color_border">
        <NewsImage fluid={coverImage.fluid} alt={coverImage.alt} />
      </ImageLink>
      <div className="item-content">
        <header className="entry-header">
          <div className="categories-links highlightlinks">
            <Link to={`/news/${slug}`}>{shortDate}</Link>
          </div>
          <h4 className="entry-title">
            <Link to={`/news/${slug}`}>{title}</Link>
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
