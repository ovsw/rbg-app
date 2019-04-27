import React from 'react'
import { graphql } from 'gatsby'

import BasicPageTemplate from '../components/Templates/BasicPageTemplate'

const basicPageTemplate = ({ data }) => <BasicPageTemplate data={data.datoCmsServiceResidential} />

export default basicPageTemplate

export const query = graphql`
  query ServiceResidentialPageQuery($slug: String!) {
    datoCmsServiceResidential(slug: { eq: $slug }) {
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
