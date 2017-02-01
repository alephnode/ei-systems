import React from 'react'
import ReactDOM from 'react-dom'
import { Router, hashHistory } from 'react-router'
import routes from "./routes"
import './index.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <Router  onUpdate={() => window.scrollTo(0, 0)} history={hashHistory} routes={routes} / >,
  document.getElementById('root')
);
