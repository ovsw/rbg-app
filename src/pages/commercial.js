import React from 'react'
import { graphql } from 'gatsby'
import FullWidthPageTemplate from '../components/Templates/FullWidthPageTemplate'

const ServicesCommercialPage = ({ data }) => (
  <>
    <FullWidthPageTemplate
      pageData={data.datoCmsServicesCommercial}
      servicesData={data.allDatoCmsServiceCommercial.edges}
    />
  </>
)

export default ServicesCommercialPage

export const query = graphql`
  query ServicesCommercialQuery {
    datoCmsServicesCommercial {
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
    allDatoCmsServiceCommercial(sort: { fields: [position], order: ASC }) {
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
