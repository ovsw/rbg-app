import React from 'react'
import { graphql } from 'gatsby'

import BasicPageTemplate from '../components/Templates/BasicPageTemplate'

const BasicPage = ({ data }) => <BasicPageTemplate data={data.datoCmsBasicPage} />

export default BasicPage

export const query = graphql`
  query BaiscPageQuery($slug: String!) {
    datoCmsBasicPage(slug: { eq: $slug }) {
      title
      headerImage {
        url
        alt
        fluid(
          maxWidth: 1920
          imgixParams: { fm: "jpg", auto: "enhance,compress", fit: "crop", crop: "lines,entropy" }
        ) {
          ...GatsbyDatoCmsFluid
        }
      }
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
