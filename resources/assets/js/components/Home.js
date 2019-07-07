import React, { Component } from 'react'
import Buttons from "./integration/Buttons"
import Image from "./integration/Image"
import Text from "./Text"
import Footer from "./Footer"

class Home extends Component {
  render () {
    return (
      <div>
        <Image />
        <Text text1='SUPPORT LOCAL CHARITIES IN GUELPH' text2='WITHOUT OPENING YOUR WALLET' />
        <Buttons />
        <Footer />
      </div>
    )
  }
}

export default Home