import React from 'react'
import { graphql } from 'gatsby'
import BasicPageTemplate from '../components/Templates/BasicPageTemplate'

const ServicesCommercialPage = ({ data }) => (
  <>
    <BasicPageTemplate data={data.datoCmsServicesCommercial} />
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
  }
`
