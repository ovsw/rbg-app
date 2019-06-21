import React from 'react'
import { graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'

import BasicPageTemplate from '../components/Templates/BasicPageTemplate'

const ContactPage = ({ data }) => (
  <>
    <HelmetDatoCms seo={data.datoCmsContactPage.seoMetaTags}>
      <meta name="robots" content="noindex, nofollow" />
      <script src="https://services.cognitoforms.com/scripts/embed.js" />
    </HelmetDatoCms>
    <BasicPageTemplate data={data.datoCmsContactPage} map contactForm />
  </>
)

export default ContactPage

export const query = graphql`
  query ContactPageQuery {
    datoCmsContactPage {
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
      embedCodes
    }
  }
`
