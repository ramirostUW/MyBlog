import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {HashRouter} from 'react-router-dom';


ReactDOM.render(<HashRouter basename={process.env.PUBLIC_URL}><App /></HashRouter>, document.getElementById('root'));
//hope this works
//ReactDOM.render(<h1>Does this work?</h1>, document.getElementById('root'));