import React, { Component } from "react";
import ReactDOM from "react-dom";
import Navigation from "./Navbar"
import Home from "./Home"

/* This is the top level file that renders the entire
  Application */
class Main extends Component {
  render () {
    return (
      <div>
        <Navigation />
        <div className='text-center'>
          <Home />
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
