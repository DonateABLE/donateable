import React, { Component } from "react";
import ReactDOM from "react-dom";
import Buttons from "./integration/Buttons"
import Image from "./integration/Image"
import Text from "./Text"
import Footer from "./Footer"
/* An example React component */
class Main extends Component {
  render () {
    return (
      <div class='text-center'>
        <Image />
        <Text />
        <Buttons />
        <Footer />
      </div>
    );
  }
}

export default Main;

/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";
*/

if (document.getElementById("mobile")) {
  ReactDOM.render(<Main />, document.getElementById("mobile"))}
