import React from 'react'
import styled from 'styled-components'

const ContentWrapper = styled.article`
  border-right: 2px solid ${props => props.theme.accentColor};
`
const Content = styled.div`
  padding-top: 0 !important;
`

const MainContentWrapper = ({ children }) => (
  <ContentWrapper className="single-post vertical-item content-padding  bottom_color_border  overflow_hidden">
    {/* <div className="entry-thumbnail item-media">
                <img src="images/gallery/09.jpg" alt="" />
              </div> */}
    <Content className="item-content">{children}</Content>
  </ContentWrapper>
)

export default MainContentWrapper
