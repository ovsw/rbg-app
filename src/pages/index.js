import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

import Hero from '../components/home/Hero'
import Features from '../components/home/Features'
import Features2 from '../components/home/Features2'
import About from '../components/home/About'
import Services from '../components/home/Services'
import News from '../components/home/News'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Hero />
    <Features />

    <Services
      theme="ls"
      title="Services"
      subtitle="Residential"
      services={[
        {
          title: 'Window repair',
          text: 'frame fix / adjustment, glass replacement, hardware replacement',
        },
        { title: 'Window Glass Replacement', text: 'Single (normal & safey glass) or Dual Pane (Insulated), ' },
        { title: 'Fully Framed Window Replacement', text: 'For upgrading old windows or for damaged frames' },
        { title: 'Shower Enclosures', text: 'Framed/Frameless,Shower Panels, Sliding doors, Custom doors' },
        { title: 'Mirror Replacement', text: 'Frameless, Custom Edgework, Bathroom, Closed doors, Studio, Home Gym' },
      ]}
    />
    <Services
      theme="ds"
      title="Services"
      subtitle="Commercial"
      services={[
        {
          title: 'Storefront Metal and Glass',
          text: 'Frameless, Custom Edgework, Bathroom, Closed doors, Studio, Home Gym',
        },
        {
          title: 'Window Glass Replacement',
          text: 'Frameless, Custom Edgework, Bathroom, Closed doors, Studio, Home Gym',
        },
        {
          title: 'Custom Furniture Glass',
          text: 'Frameless, Custom Edgework, Bathroom, Closed doors, Studio, Home Gym',
        },
        { title: '1/2" Glass Walls', text: 'Frameless, Custom Edgework, Bathroom, Closed doors, Studio, Home Gym' },
        { title: 'Frameless Entrance', text: 'Frameless, Custom Edgework, Bathroom, Closed doors, Studio, Home Gym' },
        { title: 'Commercial Doors', text: 'Frameless, Custom Edgework, Bathroom, Closed doors, Studio, Home Gym' },
        { title: 'Closures', text: 'Frameless, Custom Edgework, Bathroom, Closed doors, Studio, Home Gym' },
      ]}
    />
    <Features2 />
    <About />
    <News newsItems={data.allDatoCmsNewsArticle.edges} />
    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage

export const query = graphql`
  query IndexQuery {
    allDatoCmsNewsArticle(sort: { fields: [date], order: DESC }, limit: 3) {
      edges {
        node {
          title
          slug
          shortDate: date(formatString: "dddd, MMM Do")
          intro
          coverImage {
            url
            alt
            fluid(
              maxWidth: 440
              imgixParams: { fm: "jpg", auto: "enhance,compress", fit: "crop", crop: "faces,lines" }
            ) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
      }
    }
  }
`
