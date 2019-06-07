import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'
import SubItemListing from './SubItemListing'

const List = styled.ul`
  li {
    display: block !important;
  }
  a {
    ${tw`font-bold`};
  }
`

const Services = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteNav {
            title
            link
            children {
              title
              link
            }
          }
        }
      }
    }
  `)

  return (
    <div className="widget">
      <h3 className="widget-title">Our Services</h3>
      <hr className="divider_60_2 main_bg_color" />
      <List>
        <li>
          <Link to="/residential">Residential</Link>
          <SubItemListing items={data.site.siteMetadata.siteNav[1].children} />
        </li>
        <li>
          <Link to="/commercial">Commercial</Link>
          <SubItemListing items={data.site.siteMetadata.siteNav[2].children} />
        </li>
        <li>
          <Link to="/auto">Auto</Link>
          <SubItemListing items={[{ title: 'Windshield Glass Replacement & Repair', link: '/auto' }]} />
        </li>
      </List>
    </div>
  )
}

export default Services
