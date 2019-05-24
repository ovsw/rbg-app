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
