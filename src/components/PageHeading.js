import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'
import media from './responsive'
import CTASection from './CTASection'

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
  color: white !important;
  ${media.lg`${tw`py-20 px-4`}`};
  /* color: white; */
`
const SubHeading = styled.p`
  span {
    background-color: ${props => props.theme.accentColor};

    color: black;
  }
`

const PageHeader = ({ title, image }) => (
  <>
    <Section fluid={image.fluid} backgroundColor="#000000" className="">
      <Overlay />
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center">
            <MainHeading>{title}</MainHeading>
            {/* <SubHeading>
              <span>frame fix / adjustment, glass replacement, hardware replacement</span>
            </SubHeading> */}
          </div>
        </div>
      </div>
    </Section>
    <CTASection />
  </>
)

export default PageHeader
