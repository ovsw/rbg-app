import React from 'react'
import { graphql } from 'gatsby'
import BasicPageTemplate from '../components/Templates/BasicPageTemplate'

const ContactPage = ({ data }) => (
  <>
    <BasicPageTemplate data={data.datoCmsContactPage} />
  </>
)

export default ContactPage

export const query = graphql`
  query ContactPageQuery {
    datoCmsContactPage {
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
