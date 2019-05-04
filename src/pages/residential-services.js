import React from 'react'
import { graphql } from 'gatsby'
import BasicPageTemplate from '../components/Templates/BasicPageTemplate'

const ServicesResidentialPage = ({ data }) => (
  <>
    <BasicPageTemplate data={data.datoCmsServicesResidential} />
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
  }
`
