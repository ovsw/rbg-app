import React from 'react'
import Img from 'gatsby-image'

const ImageBlock = ({ block }) => (
  <div className="entry-thumbnail item-media">
    <Img fluid={block.image.fluid} alt={block.alt} />
  </div>
)

export default ImageBlock
