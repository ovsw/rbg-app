import React from 'react'
import { Link, graphql } from 'gatsby'
import BasicPagetemplate from '../components/Templates/BasicPageTemplate'

import SEO from '../components/seo'

const IndexPage = ({ data }) => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BasicPagetemplate data={data.datoCmsNewsArticle} />
  </>
)

export default IndexPage

export const query = graphql`
  query NewsArticleQuery($slug: String!) {
    datoCmsNewsArticle(slug: { eq: $slug }) {
      title
      coverImage {
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
      }
    }
  }
`
