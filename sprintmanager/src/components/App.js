import React, { Component } from "react";
import { Route } from "react-router-dom";

import Login from "./login";
// import SignUp form "./signup"

import "./../css/App.css";

class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Login} />
                {/* <Route exact path="/sign-up" component={SignUp} /> */}
            </div>
        );
    }
}

export default App;
