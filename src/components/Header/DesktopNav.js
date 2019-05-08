import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

const MainNav = () => {
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

  // console.log(data.site.siteMetadata)

  return (
    <nav className="mainmenu_wrapper">
      <ul className="mainmenu nav sf-menu sf-js-enabled sf-arrows">
        {data.site.siteMetadata.siteNav.map(item => (
          <li>
            <Link to={item.link}>{item.title}</Link>
            {console.log(item.children[0].title)}
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
      </ul>
    </nav>
  )
}

export default MainNav
