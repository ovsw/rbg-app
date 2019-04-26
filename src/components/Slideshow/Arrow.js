import React from 'react'
import styled, { css } from 'styled-components'
import media from '../responsive'

const ArrowBaseStyles = css`
  color: red;
  position: absolute;
  display: none !important;
  height: 40px;
  width: 40px;
  line-height: 1;
  font-size: 40px;
  cursor: pointer;
  top: 50%;
  -webkit-transform: translate(0, -50%);
  -ms-transform: translate(0, -50%);
  transform: translate(0, -50%);
  padding: 0;
  border: none;
  outline: none;
  z-index: 3;
  ${props => (props.dark ? '' : '-webkit-filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.7))')};
  ${props => (props.dark ? '' : 'filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.7))')};
  ${media.md`display:block!important;`};
  &:focus {
    outline: none;
  }
`
const ArrowLeft = styled.button`
  ${() => ArrowBaseStyles};
  left: 15px;
`
const ArrowRight = styled.button`
  ${() => ArrowBaseStyles};
  right: 15px;
`

const Arrow = props => {
  const { dir, children } = props

  return (
    <>
      {dir === 'left' && (
        <ArrowLeft type="button" aria-label="slideshow left arrow" {...props}>
          {children}
        </ArrowLeft>
      )}
      {dir === 'right' && (
        <ArrowRight type="button" aria-label="slideshow right arrow" {...props}>
          {children}
        </ArrowRight>
      )}
    </>
  )
}

export default Arrow
