import React from 'react'
import { HelmetDatoCms } from 'gatsby-source-datocms'

import { graphql } from 'gatsby'
import BasicPageTemplate from '../components/Templates/BasicPageTemplate'

const ReviewsPage = ({ data }) => (
  <>
    <HelmetDatoCms seo={data.datoCmsReviewsPage.seoMetaTags}>
      <meta name="robots" content="noindex, nofollow" />
      <script id="EmbedSocialReviewsScript" src="https://embedsocial.com/embedscript/ri.js" />
      <link
        id="EmbedSocialIFrameLightboxCSS"
        rel="stylesheet"
        href="https://embedsocial.com/cdn/iframe-lightbox.min.css"
      />
    </HelmetDatoCms>
    <BasicPageTemplate data={data.datoCmsReviewsPage} />
  </>
)

export default ReviewsPage

export const query = graphql`
  query ReviewsPageQuery {
    datoCmsReviewsPage {
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
      body {
        ... on DatoCmsTextBlock {
          id
          model {
            apiKey
          }
          content
        }
      }
      embedCodes
    }
  }
`
