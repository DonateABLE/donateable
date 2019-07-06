import React, { Component } from "react";
import ReactDOM from "react-dom";
import Navigation from "./Navbar"
import Buttons from "./integration/Buttons"
import Image from "./integration/Image"
import Text from "./Text"
import Footer from "./Footer"

/* This is the top level file that renders the entire 
  Application*/
class Main extends Component {
  render () {
    return (
      <div>
        <Navigation />
        <div className='text-center'>
          <Image />
          <Text text1='SUPPORT LOCAL CHARITIES IN GUELPH' text2='WITHOUT OPENING YOUR WALLET' />
          <Buttons />
          <Footer />
        </div>
      </div>
    )
  }
}

export default Main

/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";
*/

if (document.getElementById("mobile")) {
  ReactDOM.render(<Main />, document.getElementById("mobile"))}
