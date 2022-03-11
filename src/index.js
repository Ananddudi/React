import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {Contextapiis} from "./contextapi";
import {BrowserRouter as Router,Routes,Route,Switch} from 'react-router-dom';
import Home from './home';
import {About} from './about'

ReactDOM.render(
  <React.StrictMode>
    <Contextapiis>
    <Router>
      <Routes>
      <Route exact path="/" element={<App/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>>
    </Routes>
    </Router>
    </Contextapiis>
  </React.StrictMode>,
  document.getElementById("root")
);
