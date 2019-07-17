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
const SubList = styled.li`
  margin-bottom: 1.25rem;
`
const SubHeading = styled.h4`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
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
        <SubList>
          <SubHeading>
            <Link to="/residential">Residential</Link>
          </SubHeading>
          <SubItemListing items={data.site.siteMetadata.siteNav[1].children} />
        </SubList>
        <SubList>
          <SubHeading>
            <Link to="/commercial">Commercial</Link>
          </SubHeading>
          <SubItemListing items={data.site.siteMetadata.siteNav[2].children} />
        </SubList>
        <SubList>
          <SubHeading>
            <Link to="/auto">Auto</Link>
          </SubHeading>

          <SubItemListing items={[{ title: 'Windshield Glass Replacement & Repair', link: '/auto' }]} />
        </SubList>
      </List>
    </div>
  )
}

export default Services
