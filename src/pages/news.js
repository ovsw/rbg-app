import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import PageHeading from '../components/PageHeading'
import MainContentWrapper from '../components/common/MainContentWrapper'
import Sidebar from '../components/Sidebar/Sidebar'

const NewsImage = styled(Img)`
  height: 250px;
`
const ImageLink = styled(Link)`
  display: block;
`

const NewsListingPage = ({
  data: {
    datoCmsNewsLanding: { title, seoMetaTags, tagline, headerImage },
    allDatoCmsNewsArticle: { edges },
  },
}) => (
  <>
    <HelmetDatoCms seo={seoMetaTags} />

    <PageHeading title={title} image={headerImage} />

    <section className="ls section_padding_top_100 section_padding_bottom_100">
      <div className="container">
        <div className="row">
          <div className="col-sm-7 col-md-8 col-lg-9">
            <MainContentWrapper noborder>
              {edges.map(({ node: { title: newstitle, intro, shortDate, coverImage, slug } }) => (
                <article className="post format-small-image">
                  <div className="side-item side-md content-padding with_background rounded overflow_hidden bottom_color_border">
                    <div className="row">
                      <div className="col-md-5">
                        <div className="item-media entry-thumbnail">
                          <ImageLink to={`/news/${slug}`}>
                            <NewsImage fluid={coverImage.fluid} alt={coverImage.alt} />
                          </ImageLink>
                        </div>
                      </div>
                      <div className="col-md-7">
                        <div className="item-content">
                          <header className="entry-header">
                            <div className="categories-links highlightlinks">
                              <Link to={`/news/${slug}`}>{shortDate}</Link>
                            </div>
                            <h3 className="entry-title">
                              <Link to={`/news/${slug}`} rel="bookmark">
                                {newstitle}
                              </Link>
                            </h3>
                          </header>
                          <div className="entry-content">
                            <div dangerouslySetInnerHTML={{ __html: intro }} />
                          </div>
                        </div>
                        {/* <footer className="entry-meta small-text greylinks">
                          <div className="inline-content">
                            
                            <span>
                              <i className="fa fa-calendar highlight rightpadding_5" />
                              <a href="blog-single-right.html">
                                <time dateTime="2017-10-03T08:50:40+00:00">10.11.17</time>
                              </a>
                            </span>
                            <span>
                              <i className="fa fa-user highlight rightpadding_5" />
                              <a href="blog-right.html">Admin</a>
                            </span>
                            <span>
                              <i className="fa fa-comment highlight rightpadding_5" />
                              <a href="blog-single-right.html">3</a>
                            </span>
                          </div>
                        </footer> */}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </MainContentWrapper>
          </div>

          <Sidebar />
        </div>
      </div>
    </section>
  </>
)

export default NewsListingPage

export const query = graphql`
  query NewsListingPageQuery {
    datoCmsNewsLanding {
      title
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      headerImage {
        url
        alt
        fluid(
          maxWidth: 1920
          imgixParams: { fm: "jpg", auto: "enhance,compress", fit: "crop", crop: "lines,entropy" }
        ) {
          ...GatsbyDatoCmsFluid
        }
      }
      tagline
    }
    allDatoCmsNewsArticle(sort: { fields: [date], order: DESC }, limit: 10) {
      edges {
        node {
          title
          slug
          shortDate: date(formatString: "dddd, MMM Do")
          intro
          coverImage {
            url
            alt
            fluid(
              maxWidth: 440
              imgixParams: { fm: "jpg", auto: "enhance,compress", fit: "crop", crop: "faces,lines" }
            ) {
              ...GatsbyDatoCmsFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
