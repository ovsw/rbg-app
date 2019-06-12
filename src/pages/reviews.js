import React from 'react'
import Helmet from 'react-helmet'

import { graphql } from 'gatsby'
import BasicPageTemplate from '../components/Templates/BasicPageTemplate'

const ReviewsPage = ({ data }) => (
  <>
    <Helmet>
      <script id="EmbedSocialReviewsScript" src="https://embedsocial.com/embedscript/ri.js" />
      <link
        id="EmbedSocialIFrameLightboxCSS"
        rel="stylesheet"
        href="https://embedsocial.com/cdn/iframe-lightbox.min.css"
      />
    </Helmet>
    <BasicPageTemplate data={data.datoCmsReviewsPage} />
  </>
)

export default ReviewsPage

export const query = graphql`
  query ReviewsPageQuery {
    datoCmsReviewsPage {
      title
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
      embedCodes
    }
  }
`
