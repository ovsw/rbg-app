import React from 'react'
import { useTransition, animated, config } from 'react-spring'

const PageTransition = ({ children, location }) => {
  const newPageTransition = useTransition(location, item => item.key, {
    from: {
      position: 'absolute',
      width: '100%',
      opacity: 0,
    },
    enter: {
      opacity: 1,
      transition: `opacity 500ms ease-in-out`,
    },
    leave: {
      opacity: 0,
    },
    config: { duration: 1500 },
  })

  return newPageTransition.map(({ item, props, key }) => (
    <animated.div style={props} key={key}>
      {children}
    </animated.div>
  ))
}

export default PageTransition
