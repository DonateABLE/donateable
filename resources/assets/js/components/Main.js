import React, { Component } from "react";
import ReactDOM from "react-dom";
import Home from "./Home";
import Charities from "./Charites";
import Login from "./Login";
import Footer from "./Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import WVS from "./Charities/WVS";
import Account from "./Account";

const history = createBrowserHistory();

/* This is the top level file that renders the entire
  Application */
class Main extends Component {
    render() {
        return (
            <div
                id="main"
                style={{
                    backgroundColor: "white"
                }}
            >
                <Router history={history}>
                    <div
                        className="text-center"
                        id="content"
                        style={{ width: "100vw" }}
                    >
                        <Route exact path="/" component={Home} />
                        <Route exact path="/charities" component={Charities} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/wvs" component={WVS} />
                        <Route exact path="/account" component={Account} />
                    </div>
                    <Footer />
                </Router>
            </div>
        );
    }
}

export default Main;

/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";
 */

if (document.getElementById("mobile")) {
    ReactDOM.render(<Main />, document.getElementById("mobile"));
}
