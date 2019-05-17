import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

const DesktopNav = () => {
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
    <nav className="mainmenu_wrapper">
      <ul className="mainmenu nav sf-menu sf-js-enabled sf-arrows">
        {data.site.siteMetadata.siteNav.map(item => (
          <li key={item.link}>
            <Link to={item.link}>{item.title}</Link>
            {item.children[0].title !== 'empty' && (
              <ul>
                {item.children.map(subitem => (
                  <li key={subitem.link}>
                    <Link to={subitem.link}>{subitem.title}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default DesktopNav
