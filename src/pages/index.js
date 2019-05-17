import React from 'react'
import { graphql } from 'gatsby'

import Image from '../components/image'
import SEO from '../components/seo'

import Hero from '../components/home/Hero'
import CTASection from '../components/CTASection'
import Features from '../components/home/Features'
import Features2 from '../components/home/Features2'
import About from '../components/home/About'
import Services from '../components/home/Services'
import News from '../components/home/News'
import Testimonials from '../components/home/Testimonials'

const IndexPage = ({ data }) => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Hero />
    <CTASection />
    <Features />
    <Services theme="ls" title="Services" subtitle="Residential" services={data.allDatoCmsServiceResidential.edges} />
    <Services theme="ds" title="Services" subtitle="Commercial" services={data.allDatoCmsServiceCommercial.edges} />
    {/* <Features2 /> */}
    <About />
    <Testimonials slides={data.allDatoCmsTestimonial.edges} />
    <News newsItems={data.allDatoCmsNewsArticle.edges} />
    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> */}
  </>
)

export default IndexPage

export const query = graphql`
  query IndexQuery {
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
              ...GatsbyDatoCmsFixed_noBase64
            }
          }
        }
      }
    }
    allDatoCmsServiceCommercial(sort: { fields: [position], order: ASC }) {
      edges {
        node {
          title
          position
          slug
          tagline
          iconImage {
            url
            fixed(width: 84, imgixParams: { fm: "png", auto: "compress" }) {
              ...GatsbyDatoCmsFixed_noBase64
            }
          }
        }
      }
    }
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
              ...GatsbyDatoCmsFluid_tracedSVG
            }
          }
        }
      }
    }
    allDatoCmsTestimonial {
      edges {
        node {
          authorName
          text
        }
      }
    }
  }
`
