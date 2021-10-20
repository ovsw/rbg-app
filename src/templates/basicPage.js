import React from 'react'
import { graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'

import BasicPageTemplate from '../components/Templates/BasicPageTemplate'

const BasicPage = ({ data }) => (
  <>
    <HelmetDatoCms seo={data.datoCmsBasicPage.seoMetaTags}>
      <meta name="robots" content="noindex, nofollow" />
    </HelmetDatoCms>
    <BasicPageTemplate data={data.datoCmsBasicPage} />
  </>
)

export default BasicPage

export const query = graphql`
  query BaiscPageQuery($slug: String!) {
    datoCmsBasicPage(slug: { eq: $slug }) {
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
        ... on DatoCmsImageBlock {
          id
          model {
            apiKey
          }
          image {
            url
            title
            alt
            fluid(
              maxWidth: 785
              imgixParams: { fm: "jpg", auto: "enhance,compress", fit: "crop", crop: "faces,lines" }
            ) {
              ...GatsbyDatoCmsFluid_tracedSVG
            }
          }
        }
        ... on DatoCmsYoutubeVideo {
          id
          model {
            apiKey
          }
          youtubeVideoPageUrl
        }
      }
    }
  }
`
