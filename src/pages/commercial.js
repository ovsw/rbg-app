import React from 'react'
import { graphql } from 'gatsby'
import FullWidthPageTemplate from '../components/Templates/FullWidthPageTemplate'

const ServicesCommercialPage = ({ data }) => (
  <>
    <FullWidthPageTemplate
      pageData={data.datoCmsServicesCommercial}
      servicesData={data.allDatoCmsServiceCommercial.edges}
      category="Commercial"
    />
  </>
)

export default ServicesCommercialPage

export const query = graphql`
  query ServicesCommercialQuery {
    datoCmsServicesCommercial {
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
    }
    allDatoCmsServiceCommercial(sort: { fields: [position], order: ASC }) {
      edges {
        node {
          title
          position
          slug
          tagline
          iconImage {
            url
            fixed(width: 84, imgixParams: { fm: "png", auto: "compress" }) {
              ...GatsbyDatoCmsFixed
            }
          }
        }
      }
    }
  }
`
