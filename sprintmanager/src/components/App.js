import React, { Component } from "react";
import { Route } from "react-router-dom";

import Login from "./login";

import "./../css/App.css";

class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/login" component={Login} />
            </div>
        );
    }
}

export default App;
