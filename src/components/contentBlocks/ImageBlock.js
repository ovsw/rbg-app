import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import media from '../responsive'

const ImageWrapper = styled.div`
  margin: 3rem auto;

  ${media.lg`padding: 0 2rem;`};

  figure {
    text-align: center;
    figcaption {
      margin-top: 1rem;
    }
  }
`

const ImageBlock = ({ block }) => (
  <>
    {block.image.title && (
      <ImageWrapper className="entry-thumbnail item-media">
        <figure>
          <Img fluid={block.image.fluid} alt={block.alt} />
          <figcaption>{block.image.title}</figcaption>
        </figure>
      </ImageWrapper>
    )}
    {!block.image.title && (
      <ImageWrapper className="entry-thumbnail item-media">
        <Img fluid={block.image.fluid} alt={block.alt} />
      </ImageWrapper>
    )}
  </>
)

export default ImageBlock
