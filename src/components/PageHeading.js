import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'

const Section = styled(BackgroundImage)`
  ${tw`relative pt-32`};
  padding-top: 13rem;
  padding-bottom: 5rem;
  background-attachment: fixed;
`
const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  ${tw`absolute pin`};
  z-index: -1;
`
const MainHeading = styled.h1`
  ${tw``};
  color: white !important;
  /* color: white; */
`
const SubHeading = styled.p`
  ${tw``};
  span {
    background-color: ${props => props.theme.accentColor};
    ${tw`py-2 px-4`};
    color: black;
  }
`

const PageHeader = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      headerImage: file(relativePath: { eq: "header-bg-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1925, duotone: { highlight: "#ffffff", shadow: "#051020", opacity: 50 }) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Section fluid={data.headerImage.childImageSharp.fluid} backgroundColor="#000000" className="">
      <Overlay />
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center">
            <MainHeading>{title}</MainHeading>
            <SubHeading>
              <span>frame fix / adjustment, glass replacement, hardware replacement</span>
            </SubHeading>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default PageHeader
