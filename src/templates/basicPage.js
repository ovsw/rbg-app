import React from 'react'
import { graphql } from 'gatsby'

import BasicPageTemplate from '../components/Templates/BasicPageTemplate'

const BasicPage = ({ data }) => <BasicPageTemplate data={data.datoCmsBasicPage} />

export default BasicPage

export const query = graphql`
  query BaiscPageQuery($slug: String!) {
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
