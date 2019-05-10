import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const RecentPosts = () => {
  const data = useStaticQuery(graphql`
    query SidebarNewsQuery {
      allDatoCmsNewsArticle(sort: { fields: [date], order: DESC }, limit: 3) {
        edges {
          node {
            title
            slug
            shortDate: date(formatString: "dddd, MMM Do")
          }
        }
      }
    }
  `)

  return (
    <div className="widget widget_recent_posts">
      <h3 className="widget-title">Company News</h3>
      <hr className="divider_60_2 main_bg_color" />
      <ul>
        {data.allDatoCmsNewsArticle.edges.map(({ node }) => (
          <li>
            <div className="categories-links highlightlinks">
              <a href="blog-left.html">{node.shortDate}</a>
            </div>
            <h5>
              <a href="blog-single-left.html">{node.title}</a>
            </h5>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RecentPosts
