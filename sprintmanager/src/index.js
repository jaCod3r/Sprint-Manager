<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css';
import App from './components/App';
=======
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./components/App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/Index.css";
>>>>>>> 6ce4c88bcacc22bd9a4671c5d8edf6eef0c10160

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById("root")
);
