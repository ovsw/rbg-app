import React from 'react'
import { graphql } from 'gatsby'

import BasicPageTemplate from '../components/Templates/BasicPageTemplate'

const CommercialServicePage = ({ data }) => <BasicPageTemplate data={data.datoCmsServiceCommercial} />

export default CommercialServicePage

export const query = graphql`
  query ServiceCommercialPageQuery($slug: String!) {
    datoCmsServiceCommercial(slug: { eq: $slug }) {
      title
      tagline
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
