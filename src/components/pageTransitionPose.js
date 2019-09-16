import React from 'react'
import posed, { PoseGroup } from 'react-pose'

const timeout = 400

class Transition extends React.PureComponent {
  render() {
    const { children, location } = this.props

    const RoutesContainer = posed.div({
      enter: {
        opacity: 1,
        filter: 'brightness(100%)',
        y: 0,
        delay: timeout,
        delayChildren: timeout,
      },
      exit: {
        opacity: 0,
        filter: 'brightness(100%)',
        y: -30,
      },
    })

    return (
      <PoseGroup>
        <RoutesContainer key={location.pathname}>{children}</RoutesContainer>
      </PoseGroup>
    )
  }
}

export default Transition
