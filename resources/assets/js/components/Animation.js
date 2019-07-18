import React, { Component } from 'react'
import posed from 'react-pose'

const Box = posed.div({
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
})

class Animation extends Component {
  render () {
    return (
      <Box className='box'
        pose={this.state.isVisible ? 'visible' : 'hidden'} />
    )
  }
}

export default Animation
