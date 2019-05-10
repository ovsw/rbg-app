import React from 'react'
import { Link, graphql } from 'gatsby'
import BasicPagetemplate from '../components/Templates/BasicPageTemplate'

import SEO from '../components/seo'

const IndexPage = ({ data }) => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BasicPagetemplate data={data.datoCmsNewsArticle} />
  </>
)

export default IndexPage

export const query = graphql`
  query NewsArticleQuery($slug: String!) {
    datoCmsNewsArticle(slug: { eq: $slug }) {
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
