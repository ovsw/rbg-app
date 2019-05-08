import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

const MenuItems = () => {
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
    <>
      {data.site.siteMetadata.siteNav.map(item => (
        <li>
          <Link to={item.link}>{item.title}</Link>
          {item.children[0].title !== 'empty' && (
            <ul>
              {item.children.map(subitem => (
                <li>
                  <Link to={subitem.link}>{subitem.title}</Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </>
  )
}

export default MenuItems
