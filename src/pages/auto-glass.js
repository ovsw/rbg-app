import React from 'react'
import { graphql } from 'gatsby'
import BasicPageTemplate from '../components/Templates/BasicPageTemplate'

const ServiceAutoPage = ({ data }) => (
  <>
    <BasicPageTemplate data={data.datoCmsServicesAuto} />
  </>
)

export default ServiceAutoPage

export const query = graphql`
  query ServiceAutoQuery {
    datoCmsServicesAuto {
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
