import React from 'react'
import { graphql } from 'gatsby'
import FullWidthPageTemplate from '../components/Templates/FullWidthPageTemplate'

const ServicesResidentialPage = ({ data }) => (
  <>
    <FullWidthPageTemplate
      pageData={data.datoCmsServicesResidential}
      servicesData={data.allDatoCmsServiceResidential.edges}
      category="Residential"
    />
  </>
)

export default ServicesResidentialPage

export const query = graphql`
  query ServicesResidentialQuery {
    datoCmsServicesResidential {
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
      }
    }
    allDatoCmsServiceResidential(sort: { fields: [position], order: ASC }) {
      edges {
        node {
          title
          position
          slug
          tagline
          iconImage {
            url
            fixed(width: 84, imgixParams: { fm: "png", auto: "compress" }) {
              ...GatsbyDatoCmsFixed
            }
          }
        }
      }
    }
  }
`
