import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

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
          <li key={node.slug}>
            <div className="categories-links highlightlinks">
              <Link to={`/news/${node.slug}`}>{node.shortDate}</Link>
            </div>
            <h5>
              <Link to={`/news/${node.slug}`}>{node.title}</Link>
            </h5>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RecentPosts
