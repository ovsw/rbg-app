import React, { useState, useEffect } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Moment from 'react-moment'
import styled from 'styled-components'
import media from './responsive'

const CTAContentWrapper = styled.div`
  ${tw`text-center`};
  ${media.lg`text-align: right`};
`
const CTAButtonWrapper = styled.div`
  ${media.lg`text-align: left!important`};
`

const CTATitle = styled.h2`
  margin-bottom: 0 !important;
`

const CTATextWrapper = styled.div`
  color: black !important;
  margin: 0 !important;
`
const ActionButton = styled(Link)`
  color: black !important;
`

const CTASection = props => {
  const data = useStaticQuery(graphql`
    query CTAQuery {
      datoCmsHome {
        currentDealTitle
        currentDealText
      }
    }
  `)

  const [date, setDate] = useState(new Date())
  useEffect(() => setDate(new Date()), [])

  return (
    <section className="cs main_color2  section_padding_top_15 section_padding_bottom_15  table_section   section_bottom_overlap table_section_sm">
      <div className="container">
        <div className="row">
          <div className="col-sm-8 col-lg-6">
            <CTAContentWrapper>
              <CTATitle>{data.datoCmsHome.currentDealTitle}</CTATitle>
              <CTATextWrapper>
                <p>
                  {data.datoCmsHome.currentDealText} Offer ends{' '}
                  <Moment add={{ days: 14 }} format="MMMM Do">
                    {date}
                  </Moment>
                  !
                </p>
              </CTATextWrapper>
            </CTAContentWrapper>
          </div>
          <CTAButtonWrapper className="col-sm-4 col-lg-6 text-center">
            <ActionButton to="/" className="theme_button min_width_button color1 margin_0">
              See offer
            </ActionButton>
          </CTAButtonWrapper>
        </div>
      </div>
    </section>
  )
}

export default CTASection
