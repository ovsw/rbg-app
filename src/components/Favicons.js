import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'

const Favicons = () => {
  const data = useStaticQuery(graphql`
    query FaviconQuery {
      datoCmsSite {
        faviconMetaTags {
          tags
        }
      }
    }
  `)
  return <HelmetDatoCms favicon={data.datoCmsSite.faviconMetaTags} />
}

export default Favicons
