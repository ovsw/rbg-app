import React from 'react'
import { graphql } from 'gatsby'
import FullWidthPageTemplate from '../components/Templates/FullWidthPageTemplate'

const ServicesResidentialPage = ({ data }) => (
  <>
    <FullWidthPageTemplate
      pageData={data.datoCmsServicesResidential}
      servicesData={data.allDatoCmsServiceResidential.edges}
    />
  </>
)

export default ServicesResidentialPage

export const query = graphql`
  query ServicesResidentialQuery {
    datoCmsServicesResidential {
      title
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
