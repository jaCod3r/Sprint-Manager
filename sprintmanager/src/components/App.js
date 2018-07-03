import React, { Component } from 'react';
import './../css/App.css';
import ProgramManager from './pm';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        {/* <title>Sprint Manager</title> */}
        <Route path="/pm" component={ProgramManager} />
      </div>
    );
  }
}

export default App;
