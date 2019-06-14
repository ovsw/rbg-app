import React from 'react'
import { graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import FullWidthPageTemplate from '../components/Templates/FullWidthPageTemplate'

const ServicesResidentialPage = ({ data }) => (
  <>
    <HelmetDatoCms seo={data.datoCmsServicesResidential.seoMetaTags} />
    <FullWidthPageTemplate
      pageData={data.datoCmsServicesResidential}
      servicesData={data.allDatoCmsServiceResidential.edges}
      category="Residential"
    />
  </>
)

export default ServicesResidentialPage

export const query = graphql`
  query ServicesResidentialQuery {
    datoCmsServicesResidential {
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
    }
    allDatoCmsServiceResidential(sort: { fields: [position], order: ASC }) {
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
