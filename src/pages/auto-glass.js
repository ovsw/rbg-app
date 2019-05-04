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
