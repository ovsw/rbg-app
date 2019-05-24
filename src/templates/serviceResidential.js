import React from 'react'
import { graphql } from 'gatsby'

import BasicPageTemplate from '../components/Templates/BasicPageTemplate'

const ResidentialServicePage = ({ data }) => <BasicPageTemplate data={data.datoCmsServiceResidential} />

export default ResidentialServicePage

export const query = graphql`
  query ServiceResidentialPageQuery($slug: String!) {
    datoCmsServiceResidential(slug: { eq: $slug }) {
      title
      tagline
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
