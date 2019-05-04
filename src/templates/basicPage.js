import React from 'react'
import { graphql } from 'gatsby'

import BasicPageTemplate from '../components/Templates/BasicPageTemplate'

const basicPageTemplate = ({ data }) => <BasicPageTemplate data={data.datoCmsBasicPage} />

export default basicPageTemplate

export const query = graphql`
  query BasicPageQuery($slug: String!) {
    datoCmsBasicPage(slug: { eq: $slug }) {
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
