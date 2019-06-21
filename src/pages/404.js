import React from 'react'

import { graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import SEO from '../components/seo'
import BasicPageTemplate from '../components/Templates/BasicPageTemplate'

const NotFoundPage = ({ data }) => (
  <>
    <HelmetDatoCms seo={data.datoCmsBasicPage.seoMetaTags}>
      <meta name="robots" content="noindex, nofollow" />

      <script src="https://services.cognitoforms.com/scripts/embed.js" />
    </HelmetDatoCms>
    <BasicPageTemplate data={data.datoCmsBasicPage} />
  </>
)

export const query = graphql`
  query FourOhFourPageQuery {
    datoCmsBasicPage(slug: { eq: "page-not-found" }) {
      title
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
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

export default NotFoundPage
