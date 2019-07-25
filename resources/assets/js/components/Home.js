import React, { Component } from 'react'
import Buttons from "./Home/Buttons"
import Image from "./Home/Image"
import Text from "./Text"

class Home extends Component {
  render () {
    return (
      <div>
        <Image />
        <Text text1='SUPPORT LOCAL CHARITIES IN GUELPH' text2='WITHOUT OPENING YOUR WALLET' />
        <Buttons />
      </div>
    )
  }
}

export default Home