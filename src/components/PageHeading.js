import React from 'react'
import styled from 'styled-components'
import media from './responsive'
import CTASection from './CTASection'

const Section = styled.div`
  ${tw`relative pt-32`};
  padding-top: 13rem;
  padding-bottom: 5rem;
  ${media.lg`min-height:500px;`};
  background-attachment: fixed;
  background-color: white;
  background-size: 1000px;
  ${media.lg`background-size: 1920px`};
  background-position: top center;
  background-image: url('${props => props.imageSource}?fit=crop&h=400&max-w=800&auto=compress,enhance');
  ${media.lg`background-image: url('${props => props.imageSource}?fit=crop&h=800&max-w=1600&auto=compress,enhance');`};
`
const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  ${tw`absolute pin`};
  z-index: 10;
`
const TextWrapper = styled.div`
  ${tw`absolute pin pt-20 flex items-center justify-center`};
`

const MainHeading = styled.h1`
  color: white !important;
  ${tw`relative text-4xl`};
  z-index: 11;
  ${media.lg`${tw`py-20 px-4 text-5xl`}`};
  text-shadow: 0 0 35px rgba(129, 214, 18, 0.35), 0 0 10px gray;
  /* color: white; */
`
const ImageContainer = styled.div``

const PageHeader = ({ title, image }) => (
  <>
    <Section imageSource={image.url}>
      <Overlay />
      <TextWrapper className="container">
        <div className="row">
          <div className="col-sm-12 text-center">
            <MainHeading>{title}</MainHeading>
            {/* <SubHeading>
      <span>frame fix / adjustment, glass replacement, hardware replacement</span>
    </SubHeading> */}
          </div>
        </div>
      </TextWrapper>
    </Section>
    <CTASection />
  </>
)

export default PageHeader
