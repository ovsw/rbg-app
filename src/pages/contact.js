import React from 'react'
import { graphql } from 'gatsby'
import BasicPageTemplate from '../components/Templates/BasicPageTemplate'

const ContactPage = ({ data }) => (
  <>
    <BasicPageTemplate data={data.datoCmsContactPage} map contactForm />
  </>
)

export default ContactPage

export const query = graphql`
  query ContactPageQuery {
    datoCmsContactPage {
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
      embedCodes
    }
  }
`
