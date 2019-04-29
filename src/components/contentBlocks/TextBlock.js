import React from 'react'

const TextBlock = ({ block: { content } }) => <div dangerouslySetInnerHTML={{ __html: content }} />

export default TextBlock
