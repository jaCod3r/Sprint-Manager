import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './../css/App.css';
import Student from './Student';

class App extends Component {
  render() {
    return <div><Route path="/student" component={Student} /></div>;
  }
}

export default App;
