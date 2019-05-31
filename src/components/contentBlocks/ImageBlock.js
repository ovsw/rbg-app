import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import media from '../responsive'

const ImageWrapper = styled.div`
  margin-top: 2rem;
`

const ImageBlock = ({ block }) => (
  <ImageWrapper className="entry-thumbnail item-media">
    <Img fluid={block.image.fluid} alt={block.alt} />
  </ImageWrapper>
)

export default ImageBlock
