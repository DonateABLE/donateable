import React, { Component } from "react";
import ReactDOM from "react-dom";
import Navigation from "./Navbar"
import Home from "./Home"
import Charities from "./Charites"
import Footer from "./Footer"
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";


const history = createBrowserHistory()

/* This is the top level file that renders the entire
  Application */
class Main extends Component {
  render () {
    return (
      <div>
        <Router history={history}>
          <Navigation />
          <div className='text-center'>
            <Route exact path="/" component={Home}/>
            <Route exact path="/charities" component={Charities} />
          </div>
          <Footer />
        </Router>
      </div>
    )
  }
}

export default Main

/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";
*/

if (document.getElementById("mobile")) {
  ReactDOM.render(<Main />, document.getElementById("mobile"))}
