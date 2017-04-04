import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'
import routes from "./routes"
import './index.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";

ReactDOM.render(
  <Router  onUpdate={() => window.scrollTo(0, 0)} history={browserHistory} routes={routes} / >,
  document.getElementById('root')
);
